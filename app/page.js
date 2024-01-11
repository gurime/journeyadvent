import Footer from "./components/Footer";
import HeroForm from "./components/HeroForm";
import Navbar from "./components/Navbar";



export const metadata = {
  title: 'Journey - Explore Destinations Worldwide',
  description: 'Discover amazing destinations from all corners of the world on Journey. Plan your next adventure with our comprehensive travel guides and recommendations.',
  keywords: 'travel, destinations, explore, adventure, travel guides, world travel',
  url: 'https://www.journey.vercel.app',
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
