import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';
import googleIcon from '../assets/icons8-google-48.png'

const SignUp = () => {
    const {createUser, setUser, updateUser} = use(AuthContext)
    const navigate = useNavigate()

    const [theUser, setTheUser] = useState(null)
    const auth =getAuth(app)

    const handleGoogleSign= ()=>{
        const provider = new GoogleAuthProvider
        signInWithPopup(auth, provider)
        .then(result => {
                setTheUser(result.user)
                 navigate(`${location.state? location.state : "/"}`)
                 toast.success('Register successfully')
            })
            .catch(error => {
                const errorCode = error.code;
                toast.error(errorCode)
            })
    }

    const handleReg = (e) =>{
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        
        

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            updateUser({displayName:name, photoURL:photo}) //---
            .then(() =>{
                setUser({...user, displayName:name, photoURL:photo}) //-----user
                navigate('/')
                toast.success('Register successfully')
            })
            .catch((error)=>{
                console.log(error);
                setUser(user)
            })
            
        })
        .catch((error) => {
    const errorMessage = error.message;
    toast.error(errorMessage)
  })
    }

     useEffect(()=>{
        document.title= 'Sign Up page'
    })

    return (
        <div className='flex flex-col items-center '>

            <div className='mt-12'>
                        <button onClick={handleGoogleSign} className='btn flex items-center rounded-xl'> <img className='w-6 ' src={googleIcon} alt="" /> Sign in with Google</button>
                        <p className='text-center font-semibold text-gray-600 text-xs mt-4'>Or login with email</p>
                    </div>
            <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
                            <h1 className="text-4xl font-bold text-center m-2">Registration now!</h1>
                            <div className="card-body">
                                <form onSubmit={handleReg} className="fieldset">
                                    <label className="label">Name</label>
                                    <input type="text" name='name' className="input focus:outline-0" placeholder="Name" required/>
            
                                    <label className="label">Image</label>
                                    <input type="text" name='photo' className="input focus:outline-0" placeholder="Photo URL" required/>
            
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input focus:outline-0" placeholder="Email" required/>
            
                                    <label className="label">Password</label>
                                    <input type="password" 
                                    name='password' 
                                    className="input focus:outline-0" 
                                    placeholder="Password"
                                    pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}" 
                                    required/>
            
                                    <button className="btn btn-secondary mt-4">Registration</button>
                                </form>
                                <p>If you have a account all ready, click <Link className='text-blue-400 font-semibold' to='/auth/login'>Log in</Link></p>
                            </div>
                            
                        </div>
        </div>
    );
};

export default SignUp;