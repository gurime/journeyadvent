import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Goback from '@/app/components/goback'
import { getArticle } from '../lib';
import Goup from '@/app/components/goup';
import heat_icon from '../../../img/heater_icon.png'
import light_icon from '../../../img/light_bulb.png'
import washer_icon from '../../../img/washer_icon.png'
import tv_icon from '../../../img/tv_icon.png'
import fan_icon from '../../../img/fan_icon.png'
import water_icon from '../../../img/water_icon.png'
import swim_icon from '../../../img/swim_icon.png'
import wifi_icon from '../../../img/wifi_icon.png'
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
{post.laundry && <span><Image style={{ width:'30px',padding:'0 10px 0 0 ', height:'auto'}} src={washer_icon} alt='...'/>Laundry is available</span>}
{post.cable && <span><Image style={{ width:'30px',padding:'0 10px 0 0 ', height:'auto'}} src={tv_icon} alt='...'/>Cable is available</span>}
{post.airConditioning && <span><Image style={{ width:'30px',padding:'0 10px 0 0 ', height:'auto'}} src={fan_icon} alt='...'/>AC is available</span>}
{post.water && <span><Image style={{ width:'20px',padding:'0 10px 0 0 ', height:'auto'}} src={water_icon} alt='...'/>Water is available</span>}
{post.pool && <span><Image style={{ width:'40px',padding:'0 10px 0 0 ', height:'auto'}} src={swim_icon} alt='...'/>Pool is available</span>}
{post.wifi && <span><Image style={{ width:'30px',padding:'0 10px 0 0 ', height:'auto'}} src={wifi_icon} alt='...'/>Wifi is available</span>}

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