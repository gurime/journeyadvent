import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import React from 'react'
import FeatureTravel from './FeatureTravel';
import TravelList from './TravelList';

export const metadata = {
title: 'Journey - Travel News: Updates on Airplane and Ground Travel',
description: 'Stay informed with the latest travel news on airplane and ground travel. Explore updates on flight information, transportation advancements, and travel tips. Plan your journeys wisely with Journey’s Travel News.',
keywords: 'travel news, airplane travel, ground travel, transportation updates, flight information, travel tips',
url: 'https://www.journey.vercel.app/TravelNews',
};
  

export default function TravelNews() {
return (
<>
<Navbar/>
<FeatureTravel/>
<TravelList/>
<Footer/>
</>
)
}
