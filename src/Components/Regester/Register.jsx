import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import app from '../../Firebase_config';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
   const [passError, setPassError] = useState('')
   const [showPassword, setShowPassword] = useState(false);
   const auth = getAuth(app)
   const hnadleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      signInWithEmailAndPassword(auth, email, password)
         .then(toast.success("Login Successfull"))
         .catch(error => toast.error(error));
   }
   return (
      <div className='w-3/5 mx-auto bg-purple-900 rounded-lg mt-5'>
         <form className="card-body" onSubmit={hnadleSubmit}>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Email*</span>
               </label>
               <input type="email" placeholder="Your Email" name='email' className="input input-bordered" required />
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Password*</span>
               </label>
               <div className='join'>
                  <input type={showPassword ? "text" : "password"} name='password' placeholder="password" className="input input-bordered join-item w-full" required />
                  <button onClick={() => setShowPassword(!showPassword)} className='bg-gray-800 p-2 join-item'>{showPassword ?
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                     </svg>
                     : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                     </svg>
                  }</button>
               </div>
               {passError && <p className='text-xs text-red-500  p-1'>{passError}</p>}
               <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
               </label>
            </div>
            <div className='flex'>
               <input type="checkbox" name='terms' id='terms' />
               <label className='ms-1' htmlFor="terms">Accept our <a href="#">Terms and conditions</a></label>
            </div>
            <div className="form-control mt-6">
               <button className="btn btn-primary">Login</button>
            </div>
            <Toaster position="top-right" reverseOrder={true}></Toaster>
         </form>
      </div>
   );
};

export default Register;