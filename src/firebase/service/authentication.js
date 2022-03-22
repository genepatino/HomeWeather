
import firebaseConfig from "../firebaseConfig";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth"





const socialMediaAuth = (provider) => {
  
  const auth = getAuth(firebaseConfig);
  console.log(provider);

signInWithPopup(auth, provider)
  .then((user) => {
    // The signed-in user info.
    
    const credential = FacebookAuthProvider.credentialFromResult(user);
    console.log("credential", credential);
  
    console.log("userFacebook", user.user.email);
    if(user.user.email !== ""){
      console.log("puedes ingresar a la siguiente pagina");
      
    }
  
    

    
    
})
.catch((error) => {
    
    console.log(error);
    

    // ...
  })
  
}

export default socialMediaAuth