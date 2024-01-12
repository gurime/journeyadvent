'use client'
import { auth, db } from '@/app/Config/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, deleteDoc, doc, getDoc, getDocs, getFirestore, orderBy, query, updateDoc, where } from 'firebase/firestore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

async function getArticles(orderBy) {
    const querySnapshot = await getDocs(collection(db, "FeatureTravelArticle"));
    const data = [];
    
    querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
    });
    return data;
    }


export default function FeatureTravel() {
    const [fetchError, setFetchError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [useArticle, setUseArticle] = useState([]);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [comments, setComments] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
   



useEffect(() => {
    const fetchData = async () => {
    try {
    const data = await getArticles();
    setUseArticle(data);
    } catch (error) {
    console.error('Error fetching articles:', error);
    setFetchError('Error fetching articles. Please try again later.');
    } finally {
    setLoading(false); 
    }
    };
      
    fetchData();
}, [])
  
return (
<>

{useArticle.map((blog) => (
<div className='FeaturedTravelHero'
key={blog.id} 
style={{
backgroundImage: `url(${blog.cover_image})`,
}}>
<div className='FeatureTravelArticle_Overlay'>
<div><h1 >{blog.title}</h1>
<p style={{lineHeight: '2',
    maxWidth: '50rem',
    margin: 'auto'}}>{blog.excerpt}</p>
    <Link href={`/Articles/${blog.id}`}className="slugbtn btn">
<button className="hero-btn" >
Read More
</button>
</Link>
    </div>

</div>
</div>
))}


</>
)
}
