import React, { use, useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';
import googleIcon from '../assets/icons8-google-48.png'


const Login = () => {
    const { logIn } = use(AuthContext)
    const [errorMassage, setError] = useState("")
    const location = useLocation()
    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    const auth =getAuth(app)
    const handleGoogleSign= ()=>{
        const provider = new GoogleAuthProvider
        signInWithPopup(auth, provider)
        .then(result => {
                setUser(result.user)
                 navigate(`${location.state? location.state : "/"}`)
                 toast.success('Register successfully')
            })
            .catch(error => {
                const errorCode = error.code;
                toast.error(errorCode)
            })
    }

   //USER LOGIN   
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        console.log({ email, password });

        logIn(email, password)
            .then(result => {
                const user = result.user

                navigate(`${location.state? location.state : "/"}`)

                toast.success('Register successfully')
            })
            .catch((error) => {
                const errorCode = error.code;
                toast.error(errorCode)

                setError(errorCode)
            })
    }
     useEffect(()=>{
        document.title= 'Login page'
    })

// 
    return (
        <div className='flex flex-col items-center '> 
        
        <div className='mt-12'>
            <button onClick={handleGoogleSign} className='btn flex items-center rounded-xl'> <img className='w-6 ' src={googleIcon} alt="" /> Sign in with Google</button>
            <p className='text-center font-semibold text-gray-600 text-xs mt-4'>Or login with email</p>
        </div>       
            <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-4xl font-bold text-center m-2">Login Now!</h1>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input focus:outline-0" placeholder="Email" required/>

                        <label className="label">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="input focus:outline-0"
                            placeholder="Password"
                            minLength="6"
                            required />

                            {errorMassage && <p className='text-red-500 font-semibold'>{errorMassage}</p>}
                            <div><NavLink to='/auth/forgot-pass' className="link link-hover">Forgot password?</NavLink></div>

                        <button className="btn btn-secondary mt-4">Login</button>
                    </form>
                    <p> New to this site? <Link className='text-blue-400 font-semibold' to='/auth/Registration'>Registration</Link></p>
                </div>
            </div>
            
        </div>
    );
};

export default Login;