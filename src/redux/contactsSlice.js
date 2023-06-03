import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState =  {allContacts:[
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]};
// const initialState =  {allContacts:[]};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.allContacts.push(action.payload);
      },
    },

    deleteContact(state, action) {
      
      state.allContacts = state.allContacts.filter(contact => contact.id !== action.payload);
      
    },

    // updateContact(state, action) {
    //   console.log(state);
    //   console.log(action);

    //   const newState = state.filter(
    //     contact => contact.id !== action.payload.id
    //   );

    //   if (
    //     state.filter(
    //       contact =>
    //         contact.id !== action.payload.id &&
    //         (contact.name === action.payload.name ||
    //           contact.number === action.payload.number)
    //     )
    //   ) {
    //     return [...newState, action.payload];
    //   }
    //   return [...state];
    // },
  },
});


const persistConfig = {
  key: 'localContacts',
  version: 1,
  storage,
  // whitelist:["contacts"],
}

export const { addContact, deleteContact, updateContact } =
  contactsSlice.actions;
  
export const contactsReducer = contactsSlice.reducer;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);