import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

function Home() {
  const navigate = useNavigate();
  const userName = localStorage.getItem('loggedInUser'); // Fetch user's name from localStorage

  const handleSignOut = () => {
    localStorage.removeItem('token'); // Clear token on signout
    localStorage.removeItem('loggedInUser'); // Clear user info on signout
    navigate('/Signup'); // Navigate back to signup page
  };

  return (
    <div className="home-container">
      <h1 className="message">Assignment Complete!</h1>
      <h2 className="user">Welcome, {userName}!</h2>
      <button onClick={handleSignOut} className="signoutButton">
        Sign Out
      </button>
    </div>
  );
}

export default Home;
