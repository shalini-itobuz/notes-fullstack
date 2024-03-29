import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import noteService from '../services/ noteService';

function Notes() {
  const [notes, setNotes] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await noteService.getAllNotes();
        console.log(fetchedNotes)
        setNotes(fetchedNotes.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
        // Redirect to login if unauthorized or any error occurs
        // history('/login')
      }
    };

    fetchNotes();
  }, [history]);

  const handleDelete = async (id) => {
    try {
      await noteService.deleteNote(id);
      setNotes(notes.filter(note => note._id !== id));
    } catch (error) {
      console.error('Note deletion failed:', error.message);
    }
  };

  return (
    <div>
      <h2>My Notes</h2>
      <ul>
        {notes?.map((note, index) => (
          <li key={index}>
            {note.title} - {note.description}
            <button onClick={() => handleDelete(note._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
