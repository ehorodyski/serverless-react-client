import { useState } from 'react';
import { API, Storage } from 'aws-amplify';

export const useNotes = () => {
  const [error, setError] = useState(null);

  const createNote = async (note) => {
    try {
      return await API.post('notes', '/notes', { body: note });
    } catch (e) {
      setError(e);
    }
  };

  const s3Upload = async (file) => {
    const filename = `${Date.now()}-${file.name}`;
    const stored = await Storage.vault.put(filename, file, {
      contentType: file.type
    });
    return stored.key;
  };

  return {
    error,
    createNote,
    s3Upload
  };
};