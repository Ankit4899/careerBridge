import React, { useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profession, setProfession] = useState('student');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password || !confirmPassword || !profession) {
      setError('All fields are required!');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match!');
    } else {
      // You can replace this with an API call to handle user signup
      console.log('Signup Successful!');
      setError('');
      // Reset form fields after successful submission
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setProfession('student');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
          />
        </div>

        <div className="input-group">
          <label htmlFor="profession">Profession:</label>
          <select
            id="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="mentor">Mentor</option>
          </select>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="signup-btn">
          Sign Up
        </button>
        <Link to="/login">Already have an account?Login</Link>
      </form>
    </div>
  );
};

export default Signup;
