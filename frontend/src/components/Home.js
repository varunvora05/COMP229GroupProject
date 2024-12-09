// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        const isLoggedIn = Boolean(localStorage.getItem('token')); // Check if user is logged in
        if (isLoggedIn) {
            navigate('/information'); // Redirect to Information page if logged in
        } else {
            navigate('/signup'); // Redirect to Sign Up page if not logged in
        }
    };
    return (
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f9' }}>
            <h1 style={{ color: '#2c3e50', fontSize: '3rem', margin: '20px 0' }}>Welcome to GymTrackerPro</h1>
            <p style={{ fontSize: '1.2rem', color: '#34495e' }}>
                Your ultimate solution to track and achieve your fitness goals.
            </p>
            <div>
                <button 
                    onClick={handleGetStarted}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        backgroundColor: '#27ae60',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        margin: '10px'
                    }}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Home;
