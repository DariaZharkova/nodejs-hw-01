import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const newContact = createFakeContact();
    await writeContacts(newContact);
    console.log('New contact successfully added.');
  } catch (err) {
    console.error('Failed to add contact:', err.message);
  }
};

addOneContact();
