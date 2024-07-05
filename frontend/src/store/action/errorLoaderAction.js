export const setErrorData = (data) => ({
  type: 'SET_ERROR',
  payload: data,
});

export const setLoadingState = (data) => ({
  type: 'SET_LOADER',
  payload: data,
});

export const resetErrorLoaderState = () => ({
  type: 'RESET_STATE',
});
