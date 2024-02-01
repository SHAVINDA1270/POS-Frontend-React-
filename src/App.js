// App.js or your main component
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Check if the user is authenticated
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
      // Redirect the user to the login page or perform other actions
    }

    // You can also decode the JWT token to get user information if needed

  }, []); // Empty dependency array ensures the effect runs only once on component mount

  // Rest of the code...
};

export default App;





