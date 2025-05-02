import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const clearedData = [];
    await fs.writeFile(PATH_DB, JSON.stringify(clearedData, null, 2), 'utf8');
    console.log('All contacts have been removed.');
  } catch (err) {
    console.log('Failed to remove contacts:', err.message);
  }
};

removeAllContacts();
