import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedService } from '../store/action/cityServiceAction';

const ServiceMap = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.cityService.data);
    const handleMarkerClickEvent = (id) => {
        const record = data?.find(x => x.id === id);
        if (record) {
            dispatch(setSelectedService(record));
        }
    }
    return (
        <MapContainer center={[18.298167, 109.452379]} zoom={1} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                data?.length > 0 &&
                data?.map((x) => {
                    return (
                        <Marker
                            key={x.id}
                            position={[x.location.lat, x.location.lng]}
                            eventHandlers={{ click: (e) => handleMarkerClickEvent(x.id) }}
                        >
                            <Popup>
                                {x.name}
                            </Popup>
                        </Marker>
                    );
                })
            }
        </MapContainer>
    );
}

export default ServiceMap;