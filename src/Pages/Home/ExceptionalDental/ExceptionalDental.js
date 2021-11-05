import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png';

const ExceptionalDental = () => {


    const verticalCenter = {
        display: 'flex',
        height: 400,
        alignItems: 'center'
    }

    return (
        <Container>
            <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', height: '500px' }} src={treatment} alt="" />
                </Grid>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box sx={{ ml: 3 }}>
                        <Typography variant="h3">
                            Exceptional Dental Care, on Your Terms
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 14, color: 'gray', fontWeight: 300 }}>
                            It is a logn established fact that a reader will be distracted by the readable content of a page whe looking at its layout the point of using Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis pariatur totam, eveniet est blanditiis illo. Officia porro aliquam placeat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, ut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quas voluptate error optio earum veniam molestiae sequi quae sed amet.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};

export default ExceptionalDental;