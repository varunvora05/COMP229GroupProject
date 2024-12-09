import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const isLoggedIn = Boolean(localStorage.getItem('token')); // Check login status

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#2c3e50' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Button color="inherit" onClick={() => navigate('/')}>
                        Home
                    </Button>
                    {isLoggedIn && (
                        <>
                            <Button color="inherit" onClick={() => navigate('/information')}>
                                Information
                            </Button>
                            <Button color="inherit" onClick={() => navigate('/workout-plan')}>
                                Workout Plan
                            </Button>
                            <Button color="inherit" onClick={() => navigate('/diet-plan')}>
                                Diet Plan
                            </Button>
                        </>
                    )}
                </div>
                <div>
                    {isLoggedIn ? (
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    ) : (
                        <Button color="inherit" onClick={() => navigate('/login')}>
                            Login
                        </Button>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
