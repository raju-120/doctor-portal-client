import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Pages/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MyAppointment from "../../Pages/Deshboard/MyAppointment/MyAppointment";
import AllUsers from "../../Pages/Deshboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctor from "../../Pages/Deshboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Pages/Deshboard/ManageDoctors/ManageDoctors";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
        
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes> <DashboardLayout></DashboardLayout> </PrivateRoutes>,
        children:[
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute> <AddDoctor></AddDoctor> </AdminRoute>
            },
            {
                path: '/dashboard/manageDoctors',
                element: <AdminRoute> <ManageDoctors></ManageDoctors> </AdminRoute>
            }
        ]
    }
])

export default router;