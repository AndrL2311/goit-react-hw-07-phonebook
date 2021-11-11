import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContact,
} from './contacts-actions';
// import addContact from './contacts-operations';

// const defaultContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const itemsReducer = createReducer([], {
  [addContactSuccess]: (state, { payload }) => {
    if (state.find(contact => contact.name === payload.name)) {
      alert(`${payload.name} is alredy in contacts`);
      return state;
    } else {
      return [...state, payload];
    }
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReduser = createReducer('', {
  [filterContact]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const counterReducer = combineReducers({
  items: itemsReducer,
  filter: filterReduser,
  loading,
});

export default counterReducer;
