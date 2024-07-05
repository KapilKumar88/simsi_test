const initialState = {
  data: [],
  serviceTypes: [],
  selectedService: null
};

const cityServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SERVICE_LIST_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'SET_SERVICE_TYPE_DATA':
      return {
        ...state,
        serviceTypes: action.payload,
      };
    case 'SET_SELECTED_SERVICE':
      return {
        ...state,
        selectedService: action.payload,
      };
    default:
      return state;
  }
};

export default cityServiceReducer;
