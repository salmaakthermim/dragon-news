import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProver';

const Navbar = () => {
    const {user ,logOut } = useContext(AuthContext);
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.name}</div>
            <div className='nav space-x-5'>
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="about">About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className=''>
                <img src={userIcon} alt="" />
                </div>
                {
                    user && user?.email ? <button onClick={logOut} className='btn rounded-none btn-neutral'>Log-Oul</button> :  <Link to="/auth/login" className='btn rounded-none btn-neutral'>Login</Link>
                }
               
              

            </div>
            
        </div>
    );
};

export default Navbar;