import { combineReducers, createStore } from "redux";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

export const store = createStore(rootReducer);
