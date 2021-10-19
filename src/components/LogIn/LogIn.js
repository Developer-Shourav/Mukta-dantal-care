

import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./LogIn.css" ;


const LogIn = () => {
    
   const{ signInUsingGoogle} = useAuth();
   const location = useLocation()
   const history = useHistory() ;
   const redirect_uri = location.state?.from || "/home" ;

   const handleGoogleLogIn = () => {
     signInUsingGoogle()
     .then(result => {

       history.push(redirect_uri);
     })
   }
    return (
      /* ------- Login form container------------- */
      <div className="d-flex justify-content-center align-items-center ">
          <div className = "login-form mt-5 px-3 py-3 rounded " >
          <h2>LOG IN</h2>
            <form >
               {/* ------------Log in input style -------------- */}
              <input className = "px-5 my-1" type="email" name="" id="" />
              <br />
              <input className = "px-5 my-1" type="password" name="" id="" /> 
              <br />
            <input className=" px-5 my-1 primery-btn rounded " type="submit" value="Submit" />
            </form>
          <p>New to <strong>Mukta Dental Care ? </strong><Link to ='/register'> <br /> Create Account </Link></p>
          <div className="">----------------Or----------------</div>
          <button
            className="primery-btn rounded text-center px-4 py-2"
            onClick={handleGoogleLogIn}
           >Google Sign In</button>
          </div>
        </div>
    );
};

export default LogIn;