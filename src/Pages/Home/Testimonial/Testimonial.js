import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';




const Testimonial = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Box style={{ textAlign: 'left' }}>
                <Typography variant="h6">
                    TESTIMONIAL
                </Typography>
                <Typography sx={{ my: 2, fontWeight: 500 }} variant="h3">
                    What's Our Patients <br /> Says
                </Typography>
            </Box>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ minWidth: 275, p: 3, }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14, textAlign: 'justify' }} color="text.secondary" gutterBottom>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, possimus! Quod dicta maxime, nam magnam harum natus impedit quisquam ad maiores laboriosam. Architecto labore aut culpa tempore. Fugit, neque at.
                            </Typography>
                            <Box style={{ textAlign: 'left', display: 'flex', marginTop: '50px' }} sx={{ alignItems: 'center' }}>
                                <img style={{ width: '50px', height: '50px', marginRight: '25px' }} src={people1} alt="" />
                                <Box>
                                    <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }}>
                                        California
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ minWidth: 275, p: 3, }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14, textAlign: 'justify' }} color="text.secondary" gutterBottom>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, possimus! Quod dicta maxime, nam magnam harum natus impedit quisquam ad maiores laboriosam. Architecto labore aut culpa tempore. Fugit, neque at.
                            </Typography>
                            <Box style={{ textAlign: 'left', display: 'flex', marginTop: '50px' }} sx={{ alignItems: 'center' }}>
                                <img style={{ width: '50px', height: '50px', marginRight: '25px' }} src={people2} alt="" />
                                <Box>
                                    <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }}>
                                        California
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ minWidth: 275, p: 3, }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14, textAlign: 'justify' }} color="text.secondary" gutterBottom>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, possimus! Quod dicta maxime, nam magnam harum natus impedit quisquam ad maiores laboriosam. Architecto labore aut culpa tempore. Fugit, neque at.
                            </Typography>
                            <Box style={{ textAlign: 'left', display: 'flex', marginTop: '50px' }} sx={{ alignItems: 'center' }}>
                                <img style={{ width: '50px', height: '50px', marginRight: '25px' }} src={people3} alt="" />
                                <Box>
                                    <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }}>
                                        California
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>

                    </Card>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Testimonial;