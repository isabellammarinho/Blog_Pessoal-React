import { Box } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid, Button } from '@mui/material';
import "./Home.css";

function Home() {


    return (
        <Grid container className="background">
            <Grid item xs={12}>

                <Box display="flex" justifyContent="center" alignItems="center" height="80vh" >
                    <Box className="card" width={270} height="50vh" borderRadius={5} marginTop={12} display="center" justifyContent="center" alignItems="center">
                        <Box >
                            <Typography variant="h4" color="white" align="center">
                                Login
                            </Typography>

                            <form >
                                <Box marginY={4}>
                                    <input type="text" className="color-input"
                                        placeholder="Email" />
                                </Box>

                                <Box marginY={4}>

                                    <input type="password" className="color-input"
                                        placeholder="Senha" />
                                </Box>
                                <Button variant="contained" color="primary" className="botao">
                                    Login
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Grid>

        </Grid>
    )
}

export default Home
