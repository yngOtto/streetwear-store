export const setDynamicHeaderVisibility = (isVisible) => {
    return {
      type: 'SET_DYNAMIC_HEADER_VISIBILITY',
      payload: isVisible
    };
  };

export const setDynamicHeaderHeight = (height) => {
  return {
    type: 'SET_DYNAMIC_HEADER_HEIGHT',
    payload: height
  };
};

  