import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-primary'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    <li><Link to="/dashboard/review">Add Review</Link></li>
                    <li><Link to="/dashboard/all-users">All Users</Link></li>
                    <li><Link to="/dashboard/insert-new-tool">Insert New Tool</Link></li>
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/my-profile">My Profile</Link></li>

                    {/* { admin && <>
                    <li><Link to="/dashboard/users">All Users</Link></li>
                    <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                    <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                </>} */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;