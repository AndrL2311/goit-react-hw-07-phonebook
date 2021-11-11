import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = contact => dispatch => {
  const item = { name: contact.name, number: contact.number };
  dispatch(addContactRequest());
  axios
    .post('/contacts', item)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());
  axios
    // eslint-disable-next-line no-template-curly-in-string
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

// deleteContactSuccess,
// deleteContactError,

const contactsOperations = { addContact, deleteContact };

export default contactsOperations;
