'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { auth } from '@/app/Config/firebase';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import itcontrubte from '../../img/journey_logo.png'
import Image from 'next/image';
import { BeatLoader } from 'react-spinners';



export default function LoginForm() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errorState, setErrorState] = useState(null);
const [isInputValid, setIsInputValid] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const router = useRouter()  
    
const handleLogin = async (e) => {
e.preventDefault();
try {
setIsLoading(true);
validateInputs();
const userCredential = await signInWithEmailAndPassword(auth, email, password);
const user = userCredential.user;
router.push('/pages/Admin');
} catch (error) {
setErrorState('Authentication failed. Please check your credentials and try again.');
} finally {
setIsLoading(false);
}
}
    
const validateInputs = () => {
if (email === '' || password === '') {
setIsInputValid(false);
} else {
setIsInputValid(true);
}
};
return (
<>
<div className='contribute-box'>
<div className='contribute-leftbox' style={{ marginBottom: '10rem' }}>
<Image  style={{backgroundColor:'#a67eef',padding:'20px',cursor:'none'}} src={itcontrubte} alt='...' />  

<form style={{width:'35rem'}} className='formbox' onSubmit={handleLogin}>
<label htmlFor='email'>Email</label>
<input
type='email'
id='email'
value={email}
onChange={(e) => {
setEmail(e.target.value);
validateInputs();}}
/>

<label htmlFor='password'>Password</label>
<input
type='password'
id='password'
value={password}
onChange={(e) => {
setPassword(e.target.value);
validateInputs();}}
/>

<div className='error'>{errorState && <p>{errorState}</p>}</div>
<button type='submit' disabled={!isInputValid || isLoading}>
{isLoading ? <BeatLoader color='blue' /> : 'Login'}
</button>
</form>
</div>


</div>

</>
)
}