
import {doc, setDoc, Timestamp} from "firebase/firestore";
import { db } from '../config/firebaseConfig'
import { userData } from "./userInfo";




export const initialFirebaseFormValues = async (id, zipCode, city, state, ip) => {
  const docRef = doc(db, 'forms', id); 
  console.log('init firebase run')
  const payload = {
    id: id,
    zipcode: zipCode,
    city: city,
    state: state, 
    date: Timestamp.fromDate(new Date()),
    user_agent: navigator.userAgent,
    ip_address: ip
  }
  setDoc(docRef, payload)

  userData.id = id;
  userData.zip_code = zipCode;
  userData.city = city;
  userData.state = state;
  userData.ip_address = ip; 

  console.log('the user data is, ', userData)

}

export const trustedFormURL = (url) => {

  const id = localStorage.getItem('userId');

console.log('the url is, ', url)

  userData.trusted_form_cert_url = url;
  
  const docRef = doc(db, 'forms', id); 
  console.log('init firebase run')
  const payload = {
  trustedFormURL: url
  }
  setDoc(docRef, payload, {
      merge: true
    })



}



export const noInsurance = async (company, expires) => {
  const id = localStorage.getItem('userId');
  const docRef = doc(db, 'forms', id); 
  
  setDoc(docRef,
    {
      current_insurance_company: company,
      insurance_expires: expires
    },
    {
      merge: true
    });
  
  userData.insurance_company = company;
  userData.expiration_date = expires;
  console.log('the user data is, ', userData)

}

export const currentInsurance = async (company) => {
  const id = localStorage.getItem('userId');
  const docRef = doc(db, 'forms', id); 
  
  setDoc(docRef,
    {
      current_insurance_company: company,
    },
    {
      merge: true
    });
  
  userData.insurance_company = company;
  console.log('the user data is, ', userData)

};

export const expiredInsurance = async (expires) => {
  const id = localStorage.getItem('userId');
  const docRef = doc(db, 'forms', id); 
  
  setDoc(docRef,
    {
      insurance_expires: expires
    },
    {
      merge: true
    });
  
  userData.expiration_date = expires
  console.log('the user data is, ', userData)

};

export const homeTpye = async (homeType) => {
  const id = localStorage.getItem('userId');
  const docRef = doc(db, 'forms', id); 
  
  setDoc(docRef,
    {
      home_type: homeType
    },
    {
      merge: true
    });
  
  userData.property_type = homeTpye
  console.log('the user data is, ', userData)

};

export const ownership = async (own) => { 
  const id = localStorage.getItem('userId');
  const docRef = doc(db, 'forms', id); 
  
  setDoc(docRef,
    {
      ownership: own
    },
    {
      merge: true
    });
  
  userData.ownership = own
  console.log('the user data is, ', userData)

};

export const bedrooms = async (beds) => {
  const id = localStorage.getItem('userId');
  const docRef = doc(db, 'forms', id); 
  
  setDoc(docRef,
    {
      bedrooms: beds
    },
    {
      merge: true
    });
  
  userData.occupancy = beds
  console.log('the user data is, ', userData)

};

export const built = async (year) => {
  const id = localStorage.getItem('userId');
  const docRef = doc(db, 'forms', id); 
  
  setDoc(docRef,
    {
      home_built: year
    },
    {
      merge: true
    });
  
  userData.year_built = year
  console.log('the user data is, ', userData)

};

export const size = async (number) => {
  const id = localStorage.getItem('userId');
  const docRef = doc(db, 'forms', id); 
  
  setDoc(docRef,
    {
      square_feet_size: number
    },
    {
      merge: true
    });
  userData.property_size = number
  console.log('the user data is, ', userData)

};


export const userGender = async (gender) => {
  const id = localStorage.getItem('userId');
  const docRef = doc(db, 'forms', id); 
  
  setDoc(docRef,
    {
      gender: gender
    },
    {
      merge: true
    });
  
  userData.gender = gender
  console.log('the user data is, ', userData)

}

export const dateOfBirth = async (dob) => {
  const id = localStorage.getItem('userId');
  const docRef = doc(db, 'forms', id); 
  
  setDoc(docRef,
    {
      date_of_birth: dob
    },
    {
      merge: true
    });
  userData.birth_date = dob
  console.log('the user data is, ', userData)

};

export const claims = async (claim) => {
  const id = localStorage.getItem('userId');
  const docRef = doc(db, 'forms', id); 
  
  setDoc(docRef,
    {
      has_claims: claim
    },
    {
      merge: true
    });
  
  userData.claims = claim

  console.log('the user data is, ', userData)

};

export const addressField = async (address) => {
  const id = localStorage.getItem('userId');
  const docRef = doc(db, 'forms', id); 
  
  setDoc(docRef,
    {
      address: address
    },
    {
      merge: true
    });
  
  userData.address = address
  console.log('the user data is, ', userData)

};

export const creditScore = async (credit) => {
  const id = localStorage.getItem('userId');
  const docRef = doc(db, 'forms', id); 
  
  setDoc(docRef,
    {
      credit_score: credit
    },
    {
      merge: true
    });
  
  
  userData.credit = credit
  console.log('the user data is, ', userData)

};

export const names = async (first, last) => {
  const id = localStorage.getItem('userId');
  const docRef = doc(db, 'forms', id); 
  
  setDoc(docRef,
    {
      first_name: first,
      last_name: last
    },
    {
      merge: true
    });
  
  userData.first_name = first
  userData.last_name = last
  console.log('the user data is, ', userData)

};

export const emailphone = async (email, phone) => {
  const id = localStorage.getItem('userId');
  const docRef = doc(db, 'forms', id); 
  
  setDoc(docRef,
    {
      email: email,
      phone: phone
    },
    {
      merge: true
    });
  
  userData.email = email;
  userData.phone = phone;
  console.log('the user data is, ', userData)

}
