import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const data = await readContacts();
    if (!Array.isArray(data)) {
      throw new Error('Data is invalid. Expected an array.');
    }
    return data.length;
  } catch (err) {
    throw new Error(`Failed to count contacts: ${err.message}`);
  }
};

try {
  console.log(await countContacts());
} catch (err) {
  console.error(err.message);
}
