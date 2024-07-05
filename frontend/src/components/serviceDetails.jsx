import { useSelector } from "react-redux";

const ServiceDetail = () => {
    const data = useSelector((state) => state.cityService.selectedService);

    return (
        <div className="service-details">
            <h3>Service Details</h3>
            {
                data ?
                    <>
                        <b>Name:</b> {data?.name}<br />
                        <b>Service Type: </b>{data?.type} <br />
                        <b>Service status:</b> {data?.status?.toUpperCase()} <br />
                        <b>Location:</b><br />
                        <b>Lat:</b> {data?.location?.lat} &nbsp;
                        <b>Lng:</b> {data?.location?.lng}
                    </>
                    :
                    <h4>Select a service to see the details</h4>
            }
        </div>
    );
}

export default ServiceDetail;