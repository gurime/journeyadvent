'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { collectionRoutes, getArticle } from './HeroFormApi/api'
import Link from 'next/link';
import Image from 'next/image';
import searchimg from '../img/search_icon.png'
import indopic from '../img/indopic.jpg'
import parispic from '../img/parispic.jpg'
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth } from '../Config/firebase';
export default function HeroForm() {
const [forceRender, setForceRender] = useState(false);
const [loading, setLoading] = useState(false);
const [isSignedIn, setIsSignedIn] = useState(false);
const [searchTerm, setSearchTerm] = useState('');
const [searchResults, setSearchResults] = useState([]);
const [isOverlayActive, setIsOverlayActive] = useState(false);
const router = useRouter()
const overlayStyle = {
position: 'fixed',
top: 0,
left: 0,
width:'100%',
height: '100%',
background: '#000',
opacity:'.6',
display: isOverlayActive ? 'block' : 'none',
pointerEvents: 'none',
};

useEffect(() => {
const handleDocumentClick = (e) => {
const isClickOutsideSearch = !e.target.closest('.search-container');
if (isClickOutsideSearch) {
setIsOverlayActive(false);
setSearchResults([]);
setSearchTerm(''); // Clear the search input
}
};
document.body.addEventListener('click', handleDocumentClick);
const unsubscribe = onAuthStateChanged(auth, (user) => {
setForceRender((prev) => !prev); // Force re-render
setIsSignedIn(!!user);    });
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
throw error;
}
};

// Assuming you have an unsubscribe function
return () => {
document.body.removeEventListener('click', handleDocumentClick);
// Make sure to define the unsubscribe function
// unsubscribe();
};
}, [searchTerm, isOverlayActive]);

const handleSearch = async () => {
// Assuming getArticle is a defined function
const results = await getArticle(searchTerm);
setSearchResults(results);
};

useEffect(() => {
handleSearch();
}, [searchTerm]);

const getLink = (collection, id) => {
const route = collectionRoutes[collection];
return route ? `${route}/${id}` : '/';
};
return (
<>
<div className="hero">

<div style={overlayStyle}></div>
<form className='heroform'  onSubmit={handleSearch} > 
<h1>Lets Find Your Next Journey </h1>

<input placeholder="Find your next destination"
type="type"
spellCheck="false"
dir="auto"
tabIndex={0}
value={searchTerm}
onChange={(e) => {
setSearchTerm(e.target.value);
setIsOverlayActive(e.target.value.trim().length > 0);
}}/>

{searchResults.length > 0 && searchTerm && !loading && (
<div className="search-results-container">
{searchResults.slice(0,10).map((result) => (
<div key={result.id} className="search-result-item">
<Link key={result.id} href={getLink(result.collection, result.id)}>
<p>{result.title} | {result.address}</p>

</Link>
</div>
))}
</div>
)}

<Image style={{transform:'translate(-40px)'}} src={searchimg} width={30} alt='...'  />
</form>
</div>

{/* plan starts here */}
<div className="plan-box">

<div className="left-plan">
<h1 style={{padding:'0 20px'}}>Plan Your Adventure</h1>
<p style={{padding:'0 20px'}}>
Are you ready to embark on your next journey? <br/> Let us help you plan the adventure of a lifetime! Our website offers a wide range of travel resources to help you make the most of your trip. From searching for flights and hotels to finding exciting activities and insider tips, we’ve got you covered. With our easy-to-use search tools, you can find the best deals on flights and accommodations. Browse our extensive collection of travel guides and insider tips to discover hidden gems and must-see attractions at your destination. Save your favorite destinations and itineraries for easy access and planning. Stay up-to-date with the latest information on travel restrictions and health and safety measures to ensure a smooth and worry-free trip.

Start planning your adventure today with our comprehensive travel resources. Your next journey awaits!
</p>
</div>

<div className="right-plan">
<h1 style={{padding:'0 20px'}}>Featured Destinations</h1>
<p style={{padding:'0 20px'}}>
Looking for inspiration for your next trip? Check out some of our top featured destinations below!
</p>
<ul style={{padding:'0 20px'}}>

<li>
<Link href="#!">
<div className='planflex'>
<div style={{display:'grid'}}>
<p>Bali, Indonesia</p>
<p>2500</p>
</div>

<Image width={200} src={indopic} alt='...'/></div>
</Link>
</li>
<li>
<Link href="#!">
<div className='planflex'>
<p>Paris, Italy</p>
<Image width={200} src={parispic} alt='...'/></div>
</Link>
</li>

</ul>
</div>

</div>
{/* <!-- plan stops here --> */}

<div className="tropic-hero">
<div className="tropic-hero-title">
<h1 style={{
color:'#fff',
fontSize:'5rem',
textAlign:'center',
textTransform:'capitalize'
}}>Tropical vacation blogs</h1>
</div>
</div>
{/* tropical hero stops here */}
</>
)
}
