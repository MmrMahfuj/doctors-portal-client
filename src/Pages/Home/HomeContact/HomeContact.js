import { Typography, Box, Container } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import bg from '../../../images/appointment-bg.png';






const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58,74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175,
}


const inputStyle = {
    padding: '15px',
    margin: '5px',
    width: '50%',
    borderRadius: '5px'
}


const HomeContact = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1, mt: 5, py: 5 }}>
            <Container>
                <Typography variant="h6" style={{ color: 'gray', }}>
                    CONTACT US
                </Typography>
                <Typography sx={{ m: 2, color: 'white' }} variant="h3">
                    Always Connect with us
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={inputStyle} type="email" {...register("email",)} placeholder="Email Address" /><br />
                    <input style={inputStyle} {...register("subject",)} placeholder="Subject" /><br />
                    <textarea placeholder="Your message" style={{ ...inputStyle, height: '150px' }} type="text" {...register("text")} /><br />
                    <input style={{ width: '25%', paddingTop: '8px', paddingBottom: '8px' }} type="submit" />
                </form>
            </Container>
        </Box>
    );
};

export default HomeContact;