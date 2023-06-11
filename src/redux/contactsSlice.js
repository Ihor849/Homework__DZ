import {createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact,deleteContact,updateContact } from './operations';


const initialState = {allContacts:[],
   isLoading: false,
   error: null,};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder)=> {
    builder.addCase(fetchContacts.pending,(state)=> {
      state.isLoading = true;
    })
    .addCase(fetchContacts.fulfilled,(state, action)=>{
      state.isLoading = false;
      state.error = null;
      state.allContacts = action.payload;
    })
    .addCase(fetchContacts.rejected,(state, action) =>{
      state.isLoading = false;
      state.error = action.payload;
    })
    
    .addCase(addContact.pending,(state)=>{
      state.isLoading = true;
    })
    .addCase(addContact.fulfilled,(state, action)=>{
      state.isLoading = false;
      state.error = null;
      state.allContacts.push(action.payload) ;
    })
    .addCase(addContact.rejected,(state, action) =>{
      state.isLoading = false;
      state.error = action.payload;
    })
    
    .addCase(deleteContact.pending,(state)=>{
      state.isLoading = true;
    })
    .addCase(deleteContact.fulfilled,(state, action)=>{
      state.isLoading = false;
      state.error = null;
      state.allContacts = state.allContacts.filter(contact => contact.id !== action.payload.id);
    })
    .addCase(deleteContact.rejected,(state, action) =>{
      state.isLoading = false;
      state.error = action.payload;
    })
    

    .addCase(updateContact.pending,(state)=>{
      state.isLoading = true;
    })
    .addCase(updateContact.fulfilled,(state, action)=>{
      state.isLoading = false;
      state.error = null;
      // state.allContacts = state.allContacts.filter(contact => contact.id !== action.payload.id);
      const index = state.allContacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.allContacts.splice(index, 1, action.payload)
      
     
    })
    .addCase(updateContact.rejected,(state, action) =>{
      state.isLoading = false;
      state.error = action.payload;
    })
  },
});




  
export const contactsReducer = contactsSlice.reducer;

