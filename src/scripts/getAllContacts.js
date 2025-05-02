import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const data = await readContacts();
    return data;
  } catch (err) {
    console.error('Failed to get contacts:', err.message);
  }
};

console.log(await getAllContacts());
