import { Grid } from '@mui/material'
import React from 'react'
import CarouselComponent from '../../components/carousel/CarouselComponent';

function PaginaCarousel() {
    return (

        <Grid container marginTop={12}>
            <Grid item xs={12}>
            <CarouselComponent></CarouselComponent>

            </Grid>

        </Grid>

    )
}

export default PaginaCarousel