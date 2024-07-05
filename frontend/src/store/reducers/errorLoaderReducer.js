const initialState = {
  error: null,
  loading: false,
};

const errorLoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_LOADER':
      return {
        ...state,
        loading: action.payload,
      };
    case 'RESET_STATE':
      return {
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default errorLoaderReducer;
