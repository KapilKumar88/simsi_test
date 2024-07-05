import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServiceList } from "../store/action/cityServiceAction";

const Filter = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState(null);
    const [filterType, setFilterType] = useState('');
    const serviceTypes = useSelector((state) => state.cityService.serviceTypes);

    useEffect(() => {
        dispatch(fetchServiceList(filterType, search));
    }, [search, filterType]);

    const handleSearchInput = (e) => {
        if (e.target.value?.length > 0) {
            setSearch(e.target.value)
        } else {
            setSearch(null);
        }
    }

    return (
        <>
            <input type={"text"} onChange={handleSearchInput} placeholder="Search service by name" />
            <select onChange={(e) => {
                setFilterType(e.target.value);
            }} value={filterType}>
                <option value={''}>Select Service Type</option>
                {
                    serviceTypes?.length > 0 &&
                    serviceTypes.map((item, index) => (
                        <option key={index} value={item}>{item?.toUpperCase()}</option>
                    ))
                }
            </select>
        </>
    );
}

export default Filter;