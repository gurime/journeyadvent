import Navbar from '@/app/components/Navbar'
import React from 'react'
import UKList from './UKList'
import Footer from '@/app/components/Footer'

export const metadata = {
    title: 'Journey - Explore United Kingdom',
    description: 'Embark on a virtual journey to the United Kingdom with our detailed travel guides. Explore the rich history, culture, and beauty of this enchanting destination. Plan your UK adventure with Journey.',
    keywords: 'United Kingdom, travel, United Kingdom destinations, explore the United Kingdom, adventure, travel guides, European travel',
    url: 'https://www.journey.vercel.app/UK',
};


export default function page() {
return (
<>
<Navbar/>
<UKList/>
<Footer/>
</>
)
}
