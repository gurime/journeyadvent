import { db } from "@/app/Config/firebase";
import { collection, getDocs, query } from "firebase/firestore";


// Import statements remain the same

export async function getArticle(searchTerm) {
    try {
      // Corrected typo in collection name
      const collectionNames = ['France', 'Indonesia'];
  
      const querySnapshots = await Promise.all(
        collectionNames.map(collectionName =>
          getDocs(query(collection(db, collectionName)))
        )
      );
  
      const data = [];
  
      querySnapshots.forEach((querySnapshot, index) => {
        querySnapshot.forEach(doc => {
          const docData = doc.data();
  
          // Improved search logic with case-insensitive and trimmed search
          if (
            docData.title &&
            docData.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
          ) {
            data.push({ collection: collectionNames[index], id: doc.id, ...docData });
          }
        });
      });
  
      return data;
    } catch (error) {
      // Improved error handling
      console.error('Error in getArticle:', error);
      throw error;
    }
  }
  
  export const collectionRoutes = {
    Indonesia: '/pages/Articles', // Adjusted route for Indonesia
    France: '/pages/Articles', // Adjusted route for France
  };
  