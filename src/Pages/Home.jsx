import React from 'react'
import Hero from '../Components/Hero'
import Slider from '../Components/Slider'
import Suggestedproducts from '../Components/Suggestedproducts'
import SponsorProducts from '../Components/SponsorProducts'
import RecommedProducts from '../Components/RecommedProducts'
import TopProducts from '../Components/TopProducts'


const Home = () => {

    return (
        <>
            <Slider/>
            <Hero />
            <RecommedProducts/>
            <Suggestedproducts/>
            <TopProducts/>
            <SponsorProducts/>
        </>
    )
}

export default Home
