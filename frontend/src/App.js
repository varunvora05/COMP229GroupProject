import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Information from './components/Information';
import WorkoutPlan from './components/WorkoutPlan';
import DietPlan from './components/DietPlan';
import './App.css';  // Import CSS file to apply styles globally

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Clear token logic
    };

    return (
        <Router>
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/workout-plan" element={<WorkoutPlan />} />
                <Route path="/diet-plan" element={<DietPlan />} />
                <Route path="/information" element={<Information />} /> 
            </Routes>
        </Router>
    );
};

export default App;
