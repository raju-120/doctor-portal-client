import React, { useContext } from 'react';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../useHooks/useAdmin';
import { AuthContext } from '../../Context/AuthProvider';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                    
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointment</Link></li>
                    {
                        isAdmin && <>
                            <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                            <li><Link to='/dashboard/adddoctor'>Add a Doctor</Link></li>
                            <li><Link to='/dashboard/manageDoctors'>Manage Doctor</Link></li>
                        </>
                    
                    }
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;