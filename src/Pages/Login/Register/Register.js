import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import login from '../../../images/login.png';




const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault()
        if (loginData.password !== loginData.password2) {
            alert("your password didn't match");
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {
                        !isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name='name'
                                onBlur={handleOnBlur}
                                type="text"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name='email'
                                onBlur={handleOnBlur}
                                type="email"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                name="password"
                                onBlur={handleOnBlur}
                                type="password"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="ReType Your Password"
                                name="password2"
                                onBlur={handleOnBlur}
                                type="password"
                                variant="standard" />
                            <Button variant="contained" sx={{ width: '75%', m: 1 }} type="submit">Register</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already Register? Please Login</Button>
                            </NavLink>
                        </form>
                    }
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && !authError && <Alert severity="success">User Create Successfully!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>

        </Container>
    );
};

export default Register;