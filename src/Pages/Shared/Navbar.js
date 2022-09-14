import React,{ useEffect, useState} from 'react';
import auth from '../../config/authConfig';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Navbar = () => {

    // const [user, loading, error] = useAuthState(auth);
    const [data,setData]= useState('')
    console.log(auth);
    const navigate = useNavigate();
    const location = useLocation();
    // let from = location.state?.from?.pathname || "/";


    const logout =async ()=>{
        auth.logout();
        // navigate('/loin');
        setData('logout')
        navigate('/login');

     }
      const getUserData = async()=>{
        try {
          let res = await auth.userInfo();
          console.log('user',res);
          console.log('all',auth);
        } catch (err) {
          console.log(err.response.data);
          }
      }
      useEffect(() =>getUserData,[data])

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        {
            (auth.token != 'Please login') && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{
            auth.token != 'Please login' ?
                <button onClick={logout} className="btn btn-ghost">Log Out</button>
                :
                <Link to="/Login">Login</Link>
        }</li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">HmS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>


            <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>



        </div>
    );
};

export default Navbar;