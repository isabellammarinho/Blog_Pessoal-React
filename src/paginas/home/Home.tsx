import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagens/TabPostagem';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={5}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Hello World!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={5} >
                    <img src="https://media.istockphoto.com/vectors/cloud-storage-technology-data-backup-3d-isometric-computer-pc-with-vector-id1263040043?k=20&m=1263040043&s=612x612&w=0&h=JpygX4jp9o_YUOHBPVSGfEAVEiuvEjbwt1uVOMmKmdQ=" alt="" width="800px" height="750px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
