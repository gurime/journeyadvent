'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import adventpic from "../img/journey_logo.png"
import { useRouter } from 'next/navigation';
import { auth } from '../Config/firebase';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function Navbar() {
const [isFooterVisible, setIsFooterVisible] = useState(false);
const [isSignedIn, setIsSignedIn] = useState(false);
const [names, setNames] = useState([]);
const router = useRouter()
const toggleFooter = () => {
setIsFooterVisible(!isFooterVisible);
};
useEffect(() => {
const unsubscribe = auth.onAuthStateChanged(async (user) => {
setIsSignedIn(!!user);

if (user) {
try {
// Fetch user data from Firestore
const userData = await getUserData(user.uid);          
setNames([userData.firstName, userData.lastName]);
} catch (error) {
console.error(error.message);
}
}
});
// Add event listener to the document body
  
  
  
const getUserData = async (userId) => {
try {
const db = getFirestore();
const userDocRef = doc(db, 'users', userId);
const userDocSnapshot = await getDoc(userDocRef);    
if (userDocSnapshot.exists()) {
const userData = userDocSnapshot.data();
return userData;
} else {
return null;
}
} catch (error) {
console.error('Error fetching user data:', error.message);
throw error;
}
};
return () => {
unsubscribe(); // Assuming you have an unsubscribe function
};
}, []);
  

const handleLogout = async () => {
  try {
  await auth.signOut();
  router.push('/pages/Login')
  } catch (error) {
  }
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
<Link  href='/pages/Admin'>
{names.length === 2 && (
<>
<span className="sm-name" >{names[0]}</span>
<span className="sm-name">{names[1]}</span>
</>
)}
</Link>
) : (
  <div className="commentreg-box">
    <span
      style={{ margin: '10px', color: '#fff', cursor: 'pointer' }}
      onClick={() => router.push('/pages/Login')}
    >
      Admin
    </span>
  
  </div>
)}
<li>
<Link href="/">Home</Link>
<Link href='/pages/TravelNews'>Travel News</Link>
<Link href='#!' onClick={toggleFooter}>More:</Link>
</li>
{isSignedIn ? (
<button
type="submit"
onClick={handleLogout}
>
Log out
</button>  
) : (
<div></div>
)}
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
