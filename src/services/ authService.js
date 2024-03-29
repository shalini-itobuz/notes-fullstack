import axios from 'axios';

const authService = {
  async login(email, password) {
    const response = await axios.post('http://localhost:8800/api/users/login', { email, password });
    console.log({response});
    localStorage.setItem('token', response.data.data.token);
  },

  async register(username, email, password) {
    console.log("hello");
    await axios.post('http://localhost:8800/api/users/register', { username, email, password });
  }
};

export default authService;
