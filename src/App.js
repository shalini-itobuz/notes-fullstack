
import React from 'react';
import { BrowserRouter as Router, Route,Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';

import Register from './components/Register';
import Notes from './components/Notes';
import NoteForm from './components/NoteForm';
import ErrorPage from './components/ErrorPage';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ErrorPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/notes" element={<Notes/>} />
          <Route path="/create-note" element={<NoteForm/>} />
          <Route path="/edit-note/:id" element={<NoteForm/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = !!localStorage.getItem('token');
  const navig=useNavigate();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          navig('/login')
        )
      }
    />
  );
}

export default App;
