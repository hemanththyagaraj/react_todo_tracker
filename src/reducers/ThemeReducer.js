const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT":
      return { ...state, isLight: true };

    case "DARK":
      return { ...state, isLight: false };

    default:
      return state;
  }
};

export default themeReducer