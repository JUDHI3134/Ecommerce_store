import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from './MainCaroselData';


const items = MainCaroselData.map((item)=><img src={item.image} alt="" /> )

const MainCarosel = () => (
    <AliceCarousel
        items={items}
        paddingLeft={50}
        paddingRight={50}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
);

export default MainCarosel