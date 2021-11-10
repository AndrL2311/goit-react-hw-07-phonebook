import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
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

const contactsOperations = { addContact };

export default contactsOperations;
