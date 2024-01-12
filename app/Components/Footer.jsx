'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import footLogo from '../img/journey_icon.png'
import Image from 'next/image'
import navlogo from '../img/journey_logo.png'

const Footer = () => {

const scrollTo = () =>{
window.scroll({top: 0,

})
}  

const router = useRouter()
return (
<>



<footer id="footer">

<div className="flex-footer">
<div className="footer-tablebox"> 
<div className="footer-headline">Get To Know Us</div>

<ul className="footer-navlink">
<li><Link href='#!'>Career</Link></li>
<li><Link href='#!'>Company News</Link></li>
<li><Link href='/pages/About'>About Journey</Link></li>
<li><Link href='#!'>Investor Relations </Link></li>
<li><Link href='#!' >Advertise</Link></li>
<li><Link href="/pages/Faq">Faq</Link></li>



</ul>
</div>
{/*first tablebox stops here*/}
<div className="footer-tablebox">
  <div className="footer-headline">U.S Travel </div>

  <ul className="footer-navlink">
    <li><Link href='#!'>New York City, New York</Link></li>
    <li><Link href='#!'>Grand Canyon National Park, Arizona</Link></li>
    <li><Link href='#!'>Yellowstone National Park, Wyoming/Montana/Idaho</Link></li>
    <li><Link href='#!'>San Francisco, California</Link></li>
    <li><Link href='#!'>Orlando, Florida </Link></li>
    <li><Link href='#!'>Las Vegas, Nevada</Link></li>
    <li><Link href='#!'>New Orleans, Louisiana</Link></li>
    <li><Link href='#!'>Chicago, Illinois</Link></li>
    <li><Link href='#!'>Miami, Florida</Link></li>
    <li><Link href='#!'>Hawaii (Oahu, Maui, Big Island, Kauai)</Link></li>
  </ul>
</div>


{/*seconds tablebox stops here*/}
<div className="footer-tablebox">
<div className="footer-headline">World Travel</div>
<ul className="footer-navlink">
<li><Link href='#!'>United Kingdom</Link></li>
<li><Link href='#!'>Brazil</Link></li>
<li><Link href='#!'>South America</Link></li>
<li><Link href='#!'>Mexico</Link></li>
<li><Link href='#!'>China</Link></li>
<li><Link href='#!'>Germany</Link></li>
<li><Link href='#!'>Africa</Link></li>
<li><Link href='#!'>Australia</Link></li>
<li><Link href='#!'>Canada</Link></li>
<li><Link href='/pages/Italy'>Italy</Link></li>
<li><Link href='/pages/France'>France</Link></li>
<li><Link href='/pages/Indonesia'>Indonesia</Link></li>
</ul>
</div>



{/*third tablebox stops here*/}
<div className="footer-tablebox" style={{ borderRight: 'none' }}>
<div className="footer-headline">Travel Lifestyle</div>
<ul className="footer-navlink">
  <li><Link href='#!'>Wellness Travel</Link></li>
  <li><Link href='#!'>Cultural Experiences</Link></li>
  <li><Link href='#!'>Sustainable Travel</Link></li>
  <li><Link href='#!'>Travel Tips</Link></li>
  <li><Link href='#!'>Photography Tips</Link></li>

  <li><Link href='#!'>Luxury Travel</Link></li>
  <li><Link href='#!'>Budget Travel</Link></li>
   <li><Link href='#!'>Food & Travel</Link></li>
<li><Link href='#!'>Festivals & Events</Link></li>
  <li><Link href='#!'>Pride Travel</Link></li>
</ul>

</div>


{/*fourth tablebox stops here*/}
<div className="footer-tablebox" style={{ borderRight: 'none', borderLeft: 'solid 1px #fff' }}>
<div className="footer-headline">Tranportation</div>
<ul className="footer-navlink" style={{ borderBottom: 'none' }}>
<li><Link href='#!'>Flighs</Link></li>
<li><Link href='#!'>Ground</Link></li>
<li><Link href='#!'>Parking</Link></li>
<li><Link href='#!'>Trains</Link></li>
<li><Link href='#!'>Taxis/Rideshares</Link></li>
<li><Link href='#!'>Motorcycles/Scooters</Link></li>
<li><Link href='#!'>Subways/Metros</Link></li>
<li><Link href='#!'>Buses/Coaches</Link></li>
<li><Link href='#!'>Boats/Ferries</Link></li>
<li><Link href='#!'>Travel Fees</Link></li>

</ul>
</div>

{/*fourth tablebox stops here*/}


</div>

<div style={{display:'flex',placeItems:'center',background:'white',marginRight:'auto'}}  className="nav">
<Image style={{marginRight:'auto ',cursor:'pointer'}} title='Home Page' onClick={() => router.push('/')} src={navlogo} width={200} alt='...'  />






<div className="navlinks sm-navlink" style={{flexWrap:'nowrap',margin:'0'}}>
<Link  href='/pages/Contact'>Contact Journey</Link>
<Link  href='/pages/Terms'>terms of Use</Link>
<Link  href='/pages/Privacy'>Privacy Policies </Link>
<Link style={{border:'none'}}  href='../pages/Cookie'>Cookie Policies</Link>
</div>
</div>





<hr />
<div style={{
color:'#fff',
padding:'1rem 0',
textAlign:'center'
}}>
   &#169;2024 Journey, LLC All Rights Reserved <br />

</div>
<hr />




<div className="footer-logo-box">

<Image title='Back To Top' width={36} onClick={scrollTo}  src={footLogo} alt="..." />

</div>
</footer>








</>
)
}

export default Footer