import './App.css'
import 'leaflet/dist/leaflet.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchServiceList, fetchServiceTypes } from './store/action/cityServiceAction';
import ServiceMap from './components/serviceMap';
import Filter from './components/filter';
import ServiceList from './components/serviceList';
import ServiceDetail from './components/serviceDetails';
import { resetErrorLoaderState } from './store/action/errorLoaderAction';
import { toast } from 'react-toastify';

function App() {
  const { error, loading } = useSelector((state) => state.errorLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServiceList());
    dispatch(fetchServiceTypes());
  }, []);

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(resetErrorLoaderState());
    }
  }, [error])

  return (
    <div className="app">
      <div className='left-section'>
        <h2>Service List</h2>
        <ServiceList />
        <ServiceDetail />
      </div>
      <div className='right-section'>
        <h2>Filter and search data</h2>
        <Filter />
        <div className='map-box'>
          <ServiceMap />
        </div>
      </div>

    </div>
  );
}

export default App
