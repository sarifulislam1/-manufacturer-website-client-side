import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const NavBar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home' className='text-primary'>Home</Link></li>
                        <li><Link to='/tools' className='text-primary'>Tools</Link></li>
                        <li><Link to='/blogs' className='text-primary'>Blogs</Link></li>
                        <li>{user && <Link to='/dashboard' className='text-primary'>Dashboard</Link>}</li>
                        <li>{user ? <button className="btn btn-ghost text-primary" onClick={logout} >Log Out</button> : <Link className='text-primary' to="/login">Login</Link>}</li>


                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-primary text-xl">PH-TOOLS</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home' className='text-primary'>Home</Link></li>
                    <li><Link to='/tools' className='text-primary'>Tools</Link></li>
                    <li><Link to='/blogs' className='text-primary'>Blogs</Link></li>
                    <li>{user && <Link to='/dashboard' className='text-primary'>Dashboard</Link>}</li>
                    <li>{user ? <button className="btn btn-ghost text-primary bg-white" onClick={logout} >Log Out</button> : <Link className='text-primary' to="/login">Login</Link>}</li>


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

export default NavBar;