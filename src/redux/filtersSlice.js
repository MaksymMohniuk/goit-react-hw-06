const INITIAL_STATE = {
  filters: {
    name: "",
  },
};

export const filtersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "filters/CHANGE_FILTER":
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};
