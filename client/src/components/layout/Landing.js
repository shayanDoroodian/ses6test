import React from 'react';

import CarouselSlider from '../carousel/CarouselSlider';
import defaultSlides from '../carousel/defaultSlides';
import CategoriesView from '../landingSection/products/CategoriesView';
import ShowNews from '../landingSection/News/ShowNews';
import Stories from "../landingSection/stories/stories"
import './layout.css';

export default function Landing() {
    return (
        <div className='flexContainer'>
            <CarouselSlider slides={defaultSlides} />
            <div className='ourProduct'><b>Our Product</b></div>
            <CategoriesView />
            <ShowNews/>
            <Stories/>
        </div>
    )
}
