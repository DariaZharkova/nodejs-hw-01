import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    for (let i = 0; i < number; i += 1) {
      const contact = createFakeContact();
      await writeContacts(contact);
    }
    console.log(`Successfully generated ${number} contacts.`);
  } catch (err) {
    console.error('Failed to generate contacts:', err.message);
  }
};

generateContacts(5);
