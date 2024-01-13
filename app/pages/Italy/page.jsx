import React from 'react'
import ItalyList from './ItalyList'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata = {
    title: 'Journey - Explore Italy',
    description: 'Embark on a virtual journey to Italy with our detailed travel guides. Explore the rich history, culture, and beauty of this enchanting destination. Plan your Italian adventure with Journey.',
    keywords: 'Italy, travel, Italy destinations, explore Italy, adventure, travel guides, European travel',
    url: 'https://www.journey.vercel.app/Italy',
};


export default function Italy() {
return (
<>
<Navbar/>
<ItalyList/>
<Footer/>
</>
)
}
