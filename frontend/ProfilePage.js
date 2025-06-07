
import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaSchool, FaUniversity, FaMapMarkerAlt } from 'react-icons/fa';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    caste: '',
    grade: '',
    college: '',
    state: '',
  });

  // New state to store scholarships from backend
  const [scholarships, setScholarships] = useState([]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/match', profile);
      alert('Profile saved successfully!');
      console.log('Matched Scholarships:', response.data);

      // Update scholarships state with response data
      setScholarships(response.data);
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2>Complete Your Profile</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <FaUser style={styles.icon} />
            <input
              type="text"
              name="caste"
              placeholder="Caste"
              value={profile.caste}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <FaSchool style={styles.icon} />
            <input
              type="number"
              step="0.01"
              name="grade"
              placeholder="Grade"
              value={profile.grade}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <FaUniversity style={styles.icon} />
            <input
              type="text"
              name="college"
              placeholder="College"
              value={profile.college}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <FaMapMarkerAlt style={styles.icon} />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={profile.state}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.submitBtn}>Save Profile</button>
        </form>

        {/* Display scholarships */}
        <div style={{ marginTop: '30px', textAlign: 'left' }}>
          <h3>Matched Scholarships</h3>
          {scholarships.length === 0 && <p>No scholarships to display yet.</p>}
          <ul>
            {scholarships.map((scholarship, index) => (
              <li key={index} style={{ marginBottom: '15px' }}>
                <a href={scholarship.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                  {scholarship.title}
                </a>
                <p>Eligibility: {scholarship.eligibility || 'N/A'}</p>
                <p>Deadline: {scholarship.deadline || 'N/A'}</p>
                <p>Amount: {scholarship.amount || 'N/A'}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// ... keep styles the same




const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef2f3',
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
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    cursor: 'pointer',
  },
};

export default ProfilePage;

