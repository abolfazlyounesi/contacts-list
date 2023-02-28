import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { ApiService } from "../../../api";
import { IUser } from "../../../dataTypes";

// defining a thunk to be able to get a list of contacts by dispatching getContacts function 

export const getContacts = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await ApiService.getUsers();

      return res.results;
    } catch (error: any) {
      console.log("users api error", error);
      alert(`${error.message} \n please try again`);
      return rejectWithValue(error.message);
    }
  }
);

// using createEntityAdapter feature for creating a standard data structure for next different usages

const ContactssAdapter = createEntityAdapter<IUser>({
  selectId: (item) => item.id.value,
});

const { getInitialState, setAll } = ContactssAdapter;

const contactsSlice = createSlice({
  name: "contacts",
  initialState: getInitialState({ loading: false, error: "" }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.loading = false;
      setAll(state, action.payload);
    });
    builder.addCase(getContacts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default contactsSlice.reducer;
