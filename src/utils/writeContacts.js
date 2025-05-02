import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = await readContacts();

    if (!Array.isArray(data)) {
      console.log('Data is invalid. Expected an array.');
      return;
    }

    const updatedData = [...data, updatedContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedData, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing to file:', err.message);
  }
};
