import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import noteService from '../services/ noteService';

function NoteForm({ note, isNew }) {
  const [title, setTitle] = useState(note ? note.title : '');
  const [description, setDescription] = useState(note ? note.description : '');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isNew) {
        await noteService.createNote({ title, description });
      } else {
        await noteService.updateNote(note._id, { title, description });
      }
      history('/notes')
    } catch (error) {
      console.error('Note saving failed:', error.message);
    }
  };

  return (
    <div>
      <h2>{isNew ? 'Create Note' : 'Update Note'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">{isNew ? 'Create' : 'Update'}</button>
      </form>
    </div>
  );
}

export default NoteForm;
