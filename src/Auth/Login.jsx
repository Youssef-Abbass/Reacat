export default function Login() {





    return(
        <div className="container">
        <div className="row h-100">
        <form className="form" onSubmit={'handlesubmit'}>
            <div className="custom-form">
                <h1>Login</h1>
    

           <div className="form-control">
              
              <input 
                     id="email" 
                     name="email"
                     type="email" 
                     placeholder="enter your Email ..."
                     required></input>
               <label htmlFor="Email">Email :</label>
            </div>

            <div className="form-control">
               
              <input 
                     id="password" 
                     name="password"
                     type="password" 
                     placeholder="enter your password ..."
                     minLength={6}
                     required></input>
              <label htmlFor="password">password :</label>
            </div>
            <button className="btn btn-primary">Register</button>

            
            </div>
      </form>
      </div>
     </div>
    )
}