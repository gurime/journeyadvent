import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Goback from '@/app/components/goback'
import { getArticle } from '../lib';
import Goup from '@/app/components/goup';
import heat_icon from '../../../img/heater_icon.png'
import light_icon from '../../../img/light_bulb.png'
import Image from 'next/image';


export async function generateMetadata({ params }) {
  const articleId = params.id;
  try {
    const articleDetails = await getArticle(articleId);
    if (articleDetails) {
      return {
        title: `Journey | ${articleDetails.title || 'Page Not Found'}`,
      };
    } else {
      return {
        title: 'Journey | Page Not Found',
      };
    }
  } catch (error) {
    return {
      title: 'Journey | Page Not Found',
    };
  }
}







export default async function HomeDetailsPage({params}) {
  const articleId = params.id;

  // Fetch article details
  const post = await getArticle(articleId);

  if (!post) {
    return <div>Article not found</div>;
  }

return (
<>
<Navbar />
<div   className="article-container">
{/**block for goback btn and title */}
<div className="backbtn-box">
<h1>{post.title}</h1>
<Goback/>
</div>
{/**block for goback btn and title */}
{/**block for img */}
{post.cover_image ? (
  <div className="imgbox">
    <img src={post.cover_image} alt="..." />
  </div>
) : (
  <p>Error loading image</p>
)}
{/**block for img */}
{/**block for category and author */}
<div className="authflex">
<p>{post.propertyType}</p>
<h3 style={{
    fontWeight: '300',
    marginLeft:'auto',
    display:'flex',
    placeItems:'center'
}}> Owner {post.userName} 

</h3>

</div>
{/**block for category and author */}
<div className='cover_showcase'>
  {post.cover_showcase && <img src={post.cover_showcase} alt="Cover Showcase 1" />}
  {post.cover_showcase1 && <img src={post.cover_showcase1} alt="Cover Showcase 2" />}
  {post.cover_showcase2 && <img src={post.cover_showcase2} alt="Cover Showcase 3" />}
  {post.cover_showcase3 && <img src={post.cover_showcase3} alt="Cover Showcase 4" />}
  {post.cover_showcase4 && <img src={post.cover_showcase4} alt="Cover Showcase 5" />}
</div>

<div className='details_header_title'>
<h2>{post.price} <small>{post.billingFrequency}</small></h2>
<p>{post.property_type}</p>
<p>{post.address}</p>
</div>

<h3 style={{padding:'0 1rem'}}>Popular Amenities</h3>
<div className='amenities-grid'>
{post.heating && <span><Image style={{ width:'30px',padding:'0 10px 0 0 ', height:'auto'}} src={heat_icon} alt='...'/>Heating is available</span>}
{post.lights && <span><Image style={{ width:'30px',padding:'0 10px 0 0 ', height:'auto'}} src={light_icon} alt='...'/>Lights are available</span>}
{post.laundry && <span>Laundry is available</span>}
{post.cable && <span>Cable is available</span>}
{post.airConditioning && <span>AC is available</span>}
{post.water && <span>Water is available</span>}
{post.pool && <span>Pool is available</span>}
{post.wifi && <span>Wifi is available</span>}

</div>






<div className="body-content" style={{ whiteSpace: 'pre-line' }}><p>{post.content}</p></div>




<div
style={{
display: 'flex',
justifyContent: 'flex-end',
placeItems: 'center',
marginBottom: '1rem',
}}>
<Goup/>
</div>

</div>


<Footer /></>
)
}