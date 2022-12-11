import axios, { AxiosHeaders } from "axios";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../config/firebaseConfig'



export const readFirebase = async () => {


 let userData = {
    address: '',
    bedrooms: '',
    city: '',
   current_insurance: '',
    credit_score: '',
    date_of_birth: '',
    email: '',
    first_name: '',
    gender: '',
    claims: '',
    home_built: '',
    home_type: '',
    id: '',
    expires: '',
    last_name: '',
    ownership: '',
    phone: '',
    sqft: '',
    state: '',
   zipcode: '',
    
  }

  
  let id = localStorage.getItem('userId');
  const docRef = doc(db, "forms", id);
  const docSnap = await getDoc(docRef);

 
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());

    let data = docSnap.data(); 


    userData.address = data.address
    userData.bedrooms = data.bedrooms
    userData.city = data.city
    userData.current_insurance = data.current_insurance_company
    userData.credit_score = data.credit_score
    userData.claims = data.has_claims
    userData.date_of_birth = data.date_of_birth
    userData.email = data.email
    userData.first_name = data.first_name
    userData.gender = data.gender
    userData.home_built = data.home_built
    userData.home_type = data.home_type
    userData.id = data.id
    userData.expires = data.insurance_expires 
    userData.last_name = data.last_name
    userData.ownership = data.ownership
    userData.phone = data.phone
    userData.sqft = data.square_feet_size
    userData.state = data.state
    userData.zipcode = data.zipcode


  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  
}
