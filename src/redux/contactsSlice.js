const INITIAL_STATE = {
  contacts: {
    items: [],
  },
};

export const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "contacts/ADD_CONTACT":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "contacts/DELETE_CONTACT":
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
  }
};
