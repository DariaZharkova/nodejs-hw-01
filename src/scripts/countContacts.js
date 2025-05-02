import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const data = await readContacts();

    if (!Array.isArray(data)) {
      console.log('Data is invalid. Expected an array.');
      return;
    }

    return data.length;
  } catch (err) {
    console.error('Error while counting contacts: ', err.message);
  }
};

console.log(await countContacts());
