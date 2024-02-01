// authService.js
const API_URL = 'your_backend_api_url'; // Replace with your actual backend API URL

const authService = {
  login: async (username, password) => {
    try {
      // Send a request to the backend's authentication endpoint
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      // Parse the response to get the JWT token
      const { token } = await response.json();
      return token;
    } catch (error) {
      throw error;
    }
  },

  // Other authentication-related methods can be added here

};

export default authService;
