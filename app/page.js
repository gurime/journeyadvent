
import Footer from './Components/Footer'
import HeroForm from './Components/HeroForm'
import Navbar from './Components/Navbar'


export const metadata = {
  title: 'Journey - Explore Destinations Worldwide',
  description: 'Discover amazing destinations from all corners of the world on Journey. Plan your next adventure with our comprehensive travel guides and recommendations.',
  keywords: 'travel, destinations, explore, adventure, travel guides, world travel',
  url: 'https://www.jorney.vercel.app',
};

export default function Home() {
return (
<>
<Navbar/>
<HeroForm/>
<Footer/>
    </>
  )
}
