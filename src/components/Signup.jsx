import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser , FaLock, FaTransgender, FaPhoneAlt, FaChevronCircleUp} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function SignUp() {
  return (
    <div className = 'wrapper'>
        <form action = "">
            <h1>Signup</h1>
            <div className = "input-box">
                <input type = "text" placeholder = "Username" required/>
                <FaUser className='icon'/>
            </div>
            <div className = "input-box">
                <input type = "password" placeholder = "Password" required/>
                <FaLock className='icon'/>
            </div>
            <div className = "input-box">
                <input type = "password" placeholder = "Confirm Password" required/>
                <FaLock className='icon'/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Gender" required/>
                <FaTransgender className='icon'/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Email" required/>
                <MdEmail className='icon'/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Contact Number" required/>
                <FaPhoneAlt className='icon'/>
            </div>
            

            <div className = "register-link">
                <button> <Link to = "/" >SignUp</Link></button>
            </div>
            <div className = "register-link">
                <p>Already have an account? <Link to = "/" >Login</Link></p>
            </div>
        </form>
    </div>
  )
}

export default SignUp