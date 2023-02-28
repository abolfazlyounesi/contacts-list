import { combineReducers } from "redux";
import { ContactsReducer } from "./slices/contacts";

export const rootReducer = combineReducers({
  contacts: ContactsReducer,
});
