import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import axios from "axios";
import QRCode from "react-qr-code";
export default function  Register() {




   const [very,setvery]=useState(false);
   const [lod,setlod] = useState(false)
   const [error,seterror]=useState("");
   const [form,setform]=useState ({
         name:"",
         email:"",
         password:"",

   });

function handlechange(e){
setform ({...form,[e.target.name]:e.target.value})
console.log(form)
}

async function handlesubmit(e){
e.preventDefault();
setlod(true)
try{
const res = await axios.post (`http://127.0.0.1:8000/api/register`,form);
setlod(false);
const token=res.data.token;

window.location.pathname="/";


}
catch (err){
   setlod(false)
   if(err.response.status === 422)
   {seterror("Email is already been taken");}
   else
   {seterror("internal server error");}
}

}


   const  onChange=()=> {
      setvery(true);
    }

    return (
        <>
      
     <div className="container">
        <div className="row h-100">
        <form className="form" onSubmit={handlesubmit} >
            <div className="custom-form">
                <h1>Register Now</h1>
           <div className="form-control">
           
              <input value={form.name} 
                     onChange={handlechange}
                     id="name" 
                     name="name"
                     type="text" 
                     placeholder="enter your Full Name ..."
                     required>
                        
                     </input>
                  <label htmlFor="name">Name :</label>
            </div>

           <div className="form-control">
              
              <input value={form.email} 
                     onChange={handlechange}
                     id="email" 
                     name="email"
                     type="email" 
                     placeholder="enter your Email ..."
                     required></input>
               <label htmlFor="Email">Email :</label>
            </div>

            <div className="form-control">
               
              <input value={form.password} 
                     onChange={handlechange}
                     id="password" 
                     name="password"
                     type="password" 
                     placeholder="enter your password ..."
                     minLength={6}
                     required></input>
              <label htmlFor="password">password :</label>
            </div>
            <ReCAPTCHA
            required
            sitekey="6LfOmPQoAAAAANI14Nl9PTPrSOHDrVT3CJxgxNUE"
            onChange={onChange}
  />
            <button className="btn btn-primary" disabled={!very}>Register</button>
          <div className="qrcodediv"><QRCode value={form.email} /></div>  
            </div>
           
      </form>
      
      </div>
     </div>
        </>
    );
}