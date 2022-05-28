import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';
import auth from '../../Firebase/Firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-primary'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    {!admin && <li><Link to="/dashboard/review">Add Review</Link></li>}
                    {admin && <li><Link to="/dashboard/all-users">All Users</Link></li>}
                    {admin && <li><Link to="/dashboard/insert-new-tool">Insert New Tool</Link></li>}
                    {!admin && <li><Link to="/dashboard">My Orders</Link></li>}
                    <li><Link to="/dashboard/my-profile">My Profile</Link></li>
                    <li><Link to="/dashboard/my-portfolio">My Portfolio</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;