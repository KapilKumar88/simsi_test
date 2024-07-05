import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedService } from "../store/action/cityServiceAction";

const ServiceList = () => {
    const dispatch = useDispatch();
    const [service, setService] = useState('');
    const { data, selectedService } = useSelector((state) => state.cityService);

    useEffect(() => {
        if (service) {
            handleSelectService(service)
        }
    }, [service])

    useEffect(() => {
        if (selectedService?.id) {
            setService(selectedService?.id);
        }
    }, [selectedService]);

    const handleSelectService = (id) => {
        const record = data?.find(x => x.id === id);
        if (record) {
            dispatch(setSelectedService(record));
        }
    }

    return (
        <select
            id="service-list"
            value={service}
            onChange={(e) => {
                if (e.target.value) {
                    setService(parseInt(e.target.value));
                }
            }}
        >
            <option value={''}>Select Service</option>
            {
                data?.length > 0 &&
                data.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))
            }
        </select>
    );
}

export default ServiceList;