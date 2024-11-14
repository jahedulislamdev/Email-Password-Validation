import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   const navLinks = <>
      <li className='mx-4'><NavLink to={'/login'}>Log in</NavLink></li>
      <li className='mx-4'><NavLink to={'/register'}>Register</NavLink></li>
   </>
   return (
      <div className="navbar bg-base-100">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="p-1 rounded text-violet-600 lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {navLinks}
               </ul>
            </div>
            <a className="btn btn-ghost text-xl">Email Auth</a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               {navLinks}
            </ul>
         </div>
      </div>
   );
};

export default Header;