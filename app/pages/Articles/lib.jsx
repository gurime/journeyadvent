import { db } from "@/app/Config/firebase";
import { doc, getDoc } from "firebase/firestore";


export async function getArticle(id) {
const collectionRefs = [
doc(db, 'United States', id),
doc(db, 'United Kingdom', id),
doc(db, 'Indonesia', id),
doc(db, 'France', id),


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