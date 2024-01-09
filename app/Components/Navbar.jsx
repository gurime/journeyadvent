'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Footer from './Footer';
import adventpic from "../img/journey_logo.png"
import { useRouter } from 'next/navigation';

export default function Navbar() {
const [isFooterVisible, setIsFooterVisible] = useState(false);
const [isSignedIn, setIsSignedIn] = useState(false);
const [names, setNames] = useState([]);
const router = useRouter()
const currentUserIdentifier = 'l6rGosZQ6obbQBb89KfLW5xAHIB3';
const isAdminUser = currentUserIdentifier 
const toggleFooter = () => {
setIsFooterVisible(!isFooterVisible);
};


const handleAdminClick = () => {
    router.push('/pages/Admin'); // Change '/admin' to the actual path of your admin page
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

<ul className="navlinks">
{isSignedIn ? (
  isAdminUser && (
    <Link href='#!' style={{ cursor: 'none' }} onClick={handleAdminClick}>
      {names.length === 2 && (
        <>
          <span className="sm-name">{names[0]}</span>
          <span className="sm-name">{names[1]}</span>
        </>
      )}
    </Link>
  )
) : (
  <div className="commentreg-box">
    <span
      style={{ margin: '10px', color: '#fff', cursor: 'pointer' }}
      onClick={() => router.push('/pages/Login')}
    >
      Login
    </span>
    <span
      style={{ margin: '10px', color: '#fff', cursor: 'pointer' }}
      onClick={() => router.push('/pages/Register')}
    >
      Register
    </span>
  </div>
)}
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
