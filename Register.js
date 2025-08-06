import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      alert('Please fill all fields');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      alert('Registered successfully!');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Register</h2>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-success" onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;