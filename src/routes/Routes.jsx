import { createBrowserRouter } from "react-router"
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import CompanyJobPage from "../Pages/CompanyJobPage";
import ErrorPage from "../Pages/ErrorPage";
import Loading from "../components/Loading";
import AuthLayOut from "../layouts/AuthLayOut";
import PrivetRoute from "../provider/PrivetRoute";
import MyProfile from "../Pages/MyProfile";
import ForgotPass from "../Pages/ForgotPass";
import UpdateProfile from "../Pages/UpdateProfile";

const Router = createBrowserRouter(
    [
        {
            path: "/",
            Component: MainLayout,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    Component: Home,
                    HydrateFallback: Loading,
                    loader: () => fetch('../jobTrack.json')
                },
                {
                    path: '/jobs/:id',
                    element: <PrivetRoute> <CompanyJobPage/> </PrivetRoute>,
                    HydrateFallback: Loading,
                    loader: () => fetch('../jobTrack.json')
                },
                {
                    path:'my-profile',
                    element: <PrivetRoute><MyProfile/></PrivetRoute>
                }
            ]
        },
        {
                    path: '/auth',
                    Component: AuthLayOut,
                    HydrateFallback: Loading,
                    children: [
                        {
                            path: '/auth/login',
                            Component: Login,
                        },
                        {
                            path: '/auth/Registration',
                            Component: SignUp,
                        },
                        {
                            path: '/auth/forgot-pass',
                            Component: ForgotPass,
                        },
                        {
                            path: '/auth/update-profile',
                            Component: UpdateProfile,
                        }
                    ]
                },

    ]
)

export default Router;