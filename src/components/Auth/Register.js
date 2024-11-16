// src/components/Auth/Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register({ history }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'customer' });

  const { name, email, password, role } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', { name, email, password, role });
      history.push('/login');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type='text' name='name' value={name} onChange={onChange} required placeholder='Name' />
      <input type='email' name='email' value={email} onChange={onChange} required placeholder='Email' />
      <input type='password' name='password' value={password} onChange={onChange} required placeholder='Password' />
      <select name='role' value={role} onChange={onChange}>
        <option value='customer'>Customer</option>
        <option value='provider'>Provider</option>
      </select>
      <button type='submit'>Register</button>
    </form>
  );
}

export default Register;