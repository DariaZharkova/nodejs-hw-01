import * as fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();

    if (!Array.isArray(data)) {
      console.log('Data is invalid. Expected an array.');
      return;
    }

    if (data.length === 0) {
      console.log('No contacts to remove. The list is already empty.');
      return;
    }

    const updatedData = data.slice(0, -1);
    await fs.writeFile(PATH_DB, JSON.stringify(updatedData, null, 2), 'utf8');
    console.log('Last contact has been successfully removed.');
  } catch (err) {
    console.log('Error while removing last contact:', err);
  }
};

removeLastContact();
