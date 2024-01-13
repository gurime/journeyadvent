'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import searchimg from '../img/search_icon.png'
import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, getDoc, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';
import { auth, db } from '../Config/firebase';
import HomeCard from './HomeCard';
import { collectionRoutes, getArticle } from './HeroFormApi/api';
async function getArticles(orderBy, collectionName) {
try {
const querySnapshot = await getDocs(collection(db, collectionName));
const data = [];
querySnapshot.forEach((doc) => {
data.push({ id: doc.id, ...doc.data() });
});
return data;
} catch (error) {
throw error;
}
}

export default function HeroForm() {
const [loading, setLoading] = useState(true);
const [forceRender, setForceRender] = useState(false);
const [isSignedIn, setIsSignedIn] = useState(false);
const [searchTerm, setSearchTerm] = useState('');
const [searchResults, setSearchResults] = useState([]);
const [isOverlayActive, setIsOverlayActive] = useState(false);
const [comments, setComments] = useState([]);
const [indonesiaArticles, setIndonesiaArticles] = useState([]);
const [franceArticles, setFranceArticles] = useState([]);
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

const fetchComments = async (articleId, collectionName) => {
try {
const db = getFirestore();
const commentsRef = collection(db, collectionName); 
const queryRef = query(
commentsRef,
where('articleId', '==', articleId),
orderBy('timestamp', 'desc')
);
const querySnapshot = await getDocs(queryRef);
const newComments = querySnapshot.docs.map((doc) => {
const commentData = doc.data();
return {
id: doc.id,
...commentData,
timestamp: commentData.timestamp.toDate(),
};
});
setComments(newComments);
setLoading(false);
} catch (error) {
setErrorMessage('Error fetching comments. Please try again.');
setLoading(false);
}
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

const fetchData = async () => {
try {
const indonesiaArticlesData = await getArticles(orderBy, 'Indonesia');
setIndonesiaArticles(indonesiaArticlesData);
const franceArticlesData = await getArticles(orderBy, 'France');
setFranceArticles(franceArticlesData);
} catch (error) {
} finally {
}
};

fetchData(); 

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

return () => {
document.body.removeEventListener('click', handleDocumentClick);
unsubscribe();
};
}, [searchTerm, isOverlayActive]);

const handleSearch = async () => {
if (searchTerm.trim() !== '') { 
const results = await getArticle(searchTerm);
setSearchResults(results);
} else {
setSearchResults([]); 
}
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
type="text"
spellCheck="false"
dir="auto"
tabIndex={0}
value={searchTerm}
onChange={(e) => {
setSearchTerm(e.target.value);
setIsOverlayActive(e.target.value.trim().length > 0);
}}/>

<div className="search-results-container">
{searchResults.slice(0, 10).map((result) => (
<div key={result.id} className="search-result-item">
<Link key={result.id} href={getLink(result.collection, result.id)}>
<p>{result.title} | {result.address}</p>
</Link>
</div>
))}
</div>



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
{indonesiaArticles.map((blog) => (
<Link key={blog.id} href={`/pages/Articles/${blog.id}`}>
<div className='planflex'>
<div style={{display:'grid'}}>
<p>{blog.title}</p>
<p>{blog.bathrooms}bds | {blog.bedrooms}ba</p>
<p>{blog.price}</p>
</div>

<img width={200} src={blog.cover_image} alt='...'/></div>
</Link>
))}
</li>
<li>
{franceArticles.map((blog) => (
<Link key={blog.id} href={`/pages/Articles/${blog.id}`}>
<div className='planflex'>
<div style={{display:'grid'}}>
<p>{blog.title}</p>
<p>{blog.bathrooms}bds | {blog.bedrooms}ba</p>
<p>{blog.price}</p>
</div>

<img width={200} src={blog.cover_image} alt='...'/></div>
</Link>
))}
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

<HomeCard/>
{/* tropical hero stops here */}
</>
)
}
