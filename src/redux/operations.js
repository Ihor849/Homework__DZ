import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";




axios.defaults.baseURL = "https://64808f68f061e6ec4d497f10.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    // Використовуємо символ підкреслення як ім'я першого параметра,
    // тому що в цій операції він нам не потрібен
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        // При успішному запиті повертаємо проміс із даними
        return response.data;
      } catch (e) {
        // При помилці запиту повертаємо проміс
        // який буде відхилений з текстом помилки
        return thunkAPI.rejectWithValue(e.message);
      }
    }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    const{name,phone}=newContact
    console.log(newContact);
    try {
      const response = await axios.post("/contacts", { name,phone });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);