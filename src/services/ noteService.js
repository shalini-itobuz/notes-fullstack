import axios from 'axios';

const noteService = {
  async getAllNotes() {
    const token = localStorage.getItem('token');
    console.log(token);
    const response = await axios.get('http://localhost:8800/api/notes/get-all-notes', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  },

  async createNote(noteData) {
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:8800/api/notes/add-note', noteData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },

  async updateNote(id, noteData) {
    const token = localStorage.getItem('token');
    await axios.put(`http://localhost:8800/api/notes/update-notes/${id}`, noteData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },

  async deleteNote(id) {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:8800/api/notes/delete-notes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};

export default noteService;
