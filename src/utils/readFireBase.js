import axios, { AxiosHeaders } from "axios";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../config/firebaseConfig'



export const readFirebase = async () => {

  
  let id = localStorage.getItem('userId');
  const docRef = doc(db, "forms", id);
  const docSnap = await getDoc(docRef);

 
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());

    let data = docSnap.data(); 


  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  
}
