import React from 'react'
import IndonesiaList from './IndonesiaList'
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';



export const metadata = {
title: 'Journey - Explore Indonesia',
description: 'Embark on a virtual journey to Indonesia with our detailed travel guides. Immerse yourself in the diverse landscapes, cultures, and attractions of this captivating destination. Plan your Indonesian adventure with Journey.',
keywords: 'Indonesia, travel, Indonesian destinations, explore Indonesia, adventure, travel guides, Southeast Asia travel',
url: 'https://www.journey.vercel.app/Indonesia',
};
  

export default function page() {
return (
<>
<Navbar/>
<IndonesiaList/>
<Footer/>
</>
)
}
