import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const data = await readContacts();
    return data.length;
  } catch (err) {
    console.error('Failed to count contacts:', err.message);
  }
};

console.log(await countContacts());
