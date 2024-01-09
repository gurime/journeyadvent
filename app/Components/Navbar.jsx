'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Footer from './Footer';
import adventpic from "../img/journey_logo.png"

export default function Navbar() {
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    const toggleFooter = () => {
        setIsFooterVisible(!isFooterVisible);
        };
return (
<>
<header className='header'>
<div className="header-logo-box">

<Image width={200}
onClick={() => router.push('/')}
src={adventpic} alt="..." />
</div>  

<div className="contact-box">

<div style={{padding:'1rem'}}>
Call us, we're open 24/7
</div>

<div style={{padding:'1rem'}}>
1-800-234-5678
</div>

</div>
</header>
<nav className='nav'>
{/* <div className="navlogo">
<Image onClick={() => router.push('/')} src={Navlogo} height={36} alt='...' />
</div> */}
<ul className="navlinks">

<li>
<Link href="/">Home</Link></li>
<Link href='#!'>Travel News</Link>
<Link href='#!' onClick={toggleFooter}>More:</Link>


</ul>
</nav>

{/* footer dropdown */}
<div style={{position:'relative',width:'100%'}}>
<div style={{position:'absolute',width:'100%',zIndex:'1'}}>
{isFooterVisible && <Footer />}
</div>
</div>
{/* footer dropdown */}
</>
)
}
