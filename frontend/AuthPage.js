import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isSignUp ? 'Signed up' : 'Logged in'} successfully!`);
    navigate('/profile');
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h1>Welcome to Scholarship Finder</h1>
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div style={styles.inputContainer}>
              <FaUser style={styles.icon} />
              <input
                style={styles.input}
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div style={styles.inputContainer}>
            <FaEnvelope style={styles.icon} />
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.inputContainer}>
            <FaLock style={styles.icon} />
            <input
              style={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" style={styles.submitBtn}>
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div style={styles.toggleButtons}>
          <button
            onClick={() => setIsSignUp(true)}
            style={{
              ...styles.toggleBtn,
              backgroundColor: isSignUp ? '#007bff' : '#ccc',
            }}
          >
            Sign Up
          </button>
          <button
            onClick={() => setIsSignUp(false)}
            style={{
              ...styles.toggleBtn,
              backgroundColor: !isSignUp ? '#007bff' : '#ccc',
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  formBox: {
    width: '460px',
    padding: '35px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    border: '1px solid #ccc',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '14px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  icon: {
    padding: '10px',
    color: '#555',
  },
  input: {
    flex: 1,
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    outline: 'none',
    backgroundColor: 'transparent',
  },
  submitBtn: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    cursor: 'pointer',
  },
  toggleButtons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  toggleBtn: {
    padding: '10px 20px',
    border: 'none',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '5px',
    margin: '0 10px',
  },
};

export default AuthPage;
