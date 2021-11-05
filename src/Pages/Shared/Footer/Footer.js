import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import footerImg from '../../../images/footer-bg.png';





const appointmentBanner = {
    background: `url(${footerImg})`,
    // backgroundColor: 'rgba(45, 58,74, 0.9)',
    // backgroundBlendMode: 'darken, luminosity',
    // marginTop: 175,
}


const Footer = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1, mt: 5, py: 3 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ textAlign: 'left', pt: 3 }}>
                            Emergency Dental Care <br />
                            Check Up<br />
                            Treatment of Personal Diseases<br />
                            Tooth Extraction<br />
                            Check Up
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h5" sx={{ textAlign: 'left', fontWeight: 500 }}>
                            Services
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }}>
                            Emergency Dental Care <br />
                            Check Up<br />
                            Treatment of Personal Diseases<br />
                            Tooth Extraction<br />
                            Check Up<br />
                            Check Up<br />
                            Check Up
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h5" sx={{ textAlign: 'left', fontWeight: 500 }}>
                            Oral Health
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }}>
                            Emergency Dental Care <br />
                            Check Up<br />
                            Treatment of Personal Diseases<br />
                            Tooth Extraction<br />
                            Check Up<br />
                            Check Up<br />
                            Check Up
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h5" sx={{ textAlign: 'left', fontWeight: 500 }}>
                            Our Address
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }}>
                            Call Now <br />
                            +2025550295
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;