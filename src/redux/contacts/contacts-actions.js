import { createAction } from '@reduxjs/toolkit';
export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContact = createAction('contacts/Delete');
export const filterContact = createAction('contacts/Filter');

// const action = {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContact,
//   filterContact,
// };

// export default action;
