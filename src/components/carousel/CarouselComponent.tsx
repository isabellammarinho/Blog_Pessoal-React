import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useState } from 'react'

function CarouselComponent() {
    var items = [
        {
            img: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1635984430088-home-sliderdesktopcupom.jpg"
        },
        {
            img: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1635984430088-home-sliderdesktopcupom.jpg"
        },
        {
            img: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1635984430088-home-sliderdesktopcupom.jpg"
        },
        {
            img: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1635984430088-home-sliderdesktopcupom.jpg"
        },
    ]

    return (
        <Carousel isRTL={false} enableAutoPlay autoPlaySpeed={1500} >
            {
                items.map(item => (
                    <div> <img src={item.img} alt="" /></div>
                ))
            }
        </Carousel>
    )
}

export default CarouselComponent