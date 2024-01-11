import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Config/firebase';

export async function getArticle(id) {
const collectionRefs = [
doc(db, 'TropicalBlog', id),


];
 
try {
for (const ref of collectionRefs) {
const snapshot = await getDoc(ref);

if (snapshot.exists()) {
return snapshot.data();
}
}
  
return null;
} catch (error) {
return null;
}
}