import React, { useEffect } from 'react';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';


const ForgotPass = () => {
    const {forgotPass} = use(AuthContext)

    const handleForgotPass = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
       
        forgotPass(email).then(() => {
        toast.success("Password reset email sent!");
    
  })
  .catch((error) => {
    toast.error(error.code, error.message);
    
  })
  
        
    }

     useEffect(()=>{
        document.title= 'Forgot password'
    })
    return (
        <div>
           
           <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-4xl font-bold text-center m-2">Reset Password</h1>
                <div className="card-body">
                    <form onSubmit={handleForgotPass} className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input focus:outline-0" placeholder="Email" required/>
                            

                        <button className="btn btn-secondary mt-4">Submit</button>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default ForgotPass;