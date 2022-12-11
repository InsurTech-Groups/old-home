
import {doc, setDoc, Timestamp} from "firebase/firestore";
import { db } from '../config/firebaseConfig'




export const initialFirebaseFormValues = async (id, zipCode, city, state) => {
  const docRef = doc(db, 'forms', id); 
  console.log('init firebase run')
  const payload = {
    id: id,
    zipcode: zipCode,
    city: city,
    state: state, 
    date: Timestamp.fromDate(new Date()),
    user_agent: navigator.userAgent,
  }
  setDoc(docRef, payload)
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
}