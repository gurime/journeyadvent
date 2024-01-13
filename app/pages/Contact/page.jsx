import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'
import ContactForm from './ContactForm';

export const metadata = {
    title: 'Journey - Contact Us',
    description: 'Contact Journey for any inquiries or assistance. Discover dream destinations with our help, where elegance meets comfort in the world.',
    keywords: ['contact', 'customer support'],
    author: 'Phillip Bailey',
  };

export default function Contact() {
return (
<>
<Navbar/>
<ContactForm/>
<Footer/>
</>
)
}
