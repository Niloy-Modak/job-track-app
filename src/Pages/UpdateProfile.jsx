import React, { useEffect } from 'react';
;
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import toast from 'react-hot-toast';


const UpdateProfile = () => {

    const auth = getAuth(app)

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const photo = from.photo.value;

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then((result) => {
            result
            toast.success('Profile updated!')
            
        }).catch((error) => {
            error
            toast.error('Try again')
        })

    }
     useEffect(()=>{
        document.title= 'Update profile page'
    })

    return (
        <div>
          

            <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-2xl font-bold text-center m-2">Update Profile Now!</h1>
                <div className="card-body">
                    <form onSubmit={handleUpdateProfile} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input focus:outline-0" placeholder="Name" required />

                        <label className="label">Image</label>
                        <input type="text" name='photo' className="input focus:outline-0" placeholder="Photo URL" required />

                        <button className="btn btn-secondary mt-4">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;