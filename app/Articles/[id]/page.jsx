
import Navbar from '@/app/components/Navbar';
import { getArticle } from '../lib';
import Goback from '@/app/components/goback';
import Goup from '@/app/components/goup';
import Footer from '@/app/components/Footer';



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







export default async function DetailsPage({params}) {
  const articleId = params.id;

  // Fetch article details
  const post = await getArticle(articleId);

  if (!post) {
    return <div>Article not found</div>;
  }

return (
<>
<Navbar />
<div className="article-container">
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
<div className="authflex" style={{padding:'0 1rem'}}>
<p>{post.catogory}</p>
<h3
style={{
display: 'flex',
placeItems: 'center',
fontWeight: '300',
}}
className="card-category">
{post.author}
{/**separator */}
<div
style={{
height: '30px',
margin: '0 0 0 6px',
}}
></div>
{/**separator */}
<img
style={{ width: '60px', }}
className="authpic"
src={post.authpic}
alt="..."
/>
</h3>
</div>
{/**block for category and author */}
<div className="flexdate">{post.date}</div>
<div className="body-content">
<p>{post.content}</p>
<p>{post.content1}</p>
<p>{post.content2}</p>
<p>{post.content3}</p>
<p>{post.content4}</p>
<p>{post.content5}</p>
<p>{post.content6}</p>
</div>




<div
style={{
display: 'flex',
justifyContent: 'flex-end',
placeItems: 'center',
marginBottom: '1rem',
}}
>
<Goup/>
  
</div>
</div>
<Footer />
</>
)
}