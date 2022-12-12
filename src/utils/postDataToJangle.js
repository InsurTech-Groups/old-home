import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from '../config/firebaseConfig'


export const postDataToJangle = async () => {


  //TODO
  // 2. change state from full spelling to Abbrevation
  // 3. change DOB to YYYY/MM/DD
  // 4. Change policy expiration to YYYY/MM/DD
  // 5. Zip code doesnt pass
  // 6. get trusted form working correct
  
  let id = localStorage.getItem('userId');
  const docRef = doc(db, "forms", id);
  const docSnap = await getDoc(docRef);

  let postData = {
   
  
    meta: {
      originally_created: '',
      trusted_form_cert_url: '',
      user_agent: '',
      landing_page_url: "https://www.home.insurtechgroups.com",
      tcpa_compliant: true,
      tcpa_consent_text: "By clicking Get My Free Quote below, I am agreeing to receive text messages from InsurTech Groups and business partners. I provide my signature expressly consenting to recurring contact from Insurtech Groups or its business partners at the number I provided regarding products or services via live, automated or prerecorded telephone call, text message, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of purchasing property, goods, or services. I understand that I can revoke this consent at any time. Terms & conditions & Privacy policy apply."
    },
  
    contact: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      ip_address: "192.85.14"
    },
  
    data: {
      birth_date: "",
      gender: "",
      marital_status: "Single",
      properties: [
        {
          property_type: "",
          ownership: "",
          occupancy: "",
          year_built: "",
  
        }
      ],
  
      requested_policy: {
        coverage_type: "Superior",
  
      },
        
      current_policy: {
        insurance_company: "",
        expiration_date: "",
        coverage_type: "Superior",
      }
    }
  }


  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());

    let data = docSnap.data();
    postData.meta.originally_created = new Date().getDate;
    postData.meta.user_agent = data.user_agent;

    postData.contact.ip_address = data.ip

    postData.contact.first_name = data.first_name
    postData.contact.last_name = data.last_name
    postData.contact.email = data.email
    postData.contact.phone = data.phone
    postData.contact.address = data.address
    postData.contact.city = data.city
    postData.contact.state = data.state
    postData.contact.zip_code = data.zipcode

    postData.data.birth_date = data.date_of_birth
    postData.data.gender = data.gender

    postData.data.properties[0].property_type = data.home_type
    postData.data.properties[0].ownership = data.ownership
    postData.data.properties[0].occupancy = data.bedrooms
    postData.data.properties[0].year_built = data.home_built

    postData.data.current_policy.insurance_company = data.current_insurance_company
    postData.data.current_policy.expiration_date = data.insurance_expires
  

    //post data to url
    console.log(postData)
    fetch('https://api.jangl.com/v2/home_insurance/capture', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 07a0e7ada9a4f2c9d4fdc2a01e8599c8e975ae12'
      },
      body: JSON.stringify(postData)
    })
      .then(response => response.json())
      .then(data => {
        toast.success('Form Submitted')
      })
      .catch((error) => {
        toast.error('Error in submitting your form!')
      });
    
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    toast.error('Looks like you havent completed the form')
  }
  
}
