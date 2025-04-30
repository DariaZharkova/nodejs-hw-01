import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = await readContacts();
    const updatedData = [...data, updatedContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedData), 'utf8');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};
