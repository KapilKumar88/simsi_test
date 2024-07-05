import { setErrorData } from "./errorLoaderAction";

export const setServiceListData = (data) => ({
  type: 'SET_SERVICE_LIST_DATA',
  payload: data,
});

export const setServiceTypeData = (data) => ({
  type: 'SET_SERVICE_TYPE_DATA',
  payload: data,
});

export const setSelectedService = (data) => ({
  type: 'SET_SELECTED_SERVICE',
  payload: data,
});

export const fetchServiceList = (serviceType, search) => {
  let baseURL = `http://localhost:5000/api/services`;

  if (serviceType && search) {
    baseURL += `?serviceType=${encodeURIComponent(serviceType)}&search=${encodeURIComponent(search)}`;
  } else if (serviceType) {
    baseURL += `?serviceType=${encodeURIComponent(serviceType)}`;
  } else if (search) {
    baseURL += `?search=${encodeURIComponent(search)}`;
  }

  return (dispatch) => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((res) => {
        if (res?.success) {
          dispatch(setServiceListData(res?.data));
        } else {
          dispatch(setErrorData(res?.message || 'Something went wrong'));
        }
      })
      .catch(err => {
        dispatch(setErrorData(err?.message || 'Something went wrong'));
      });
  };
};

export const fetchServiceTypes = () => {
  return (dispatch) => {
    fetch('http://localhost:5000/api/services-types')
      .then((response) => response.json())
      .then((res) => {
        if (res?.success) {
          dispatch(setServiceTypeData(res?.data));
        } else {
          dispatch(setErrorData(res?.message || 'Something went wrong'));
        }
      })
      .catch((err) => {
        dispatch(setErrorData(err?.message || 'Something went wrong'));
      });
  };
};
