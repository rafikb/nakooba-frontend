// src/pages/ProfilePage.js
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

function ProfilePage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default ProfilePage;