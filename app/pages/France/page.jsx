import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import React from 'react'
import ParisList from './ParisList'

export const metadata = {
title: 'Journey - Explore France',
description: 'Embark on a virtual journey to France with our detailed travel guides. Explore the rich history, culture, and beauty of this enchanting destination. Plan your French adventure with Journey.',
keywords: 'France, travel, French destinations, explore France, adventure, travel guides, European travel',
url: 'https://www.journey.vercel.app/France',
};
  

export default function France() {
return (
<>
<Navbar/>
<ParisList/>
<Footer/>
</>
)
}
