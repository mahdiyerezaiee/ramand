import {Route, Routes } from "react-router"
import Home from "./Home/home";
import Login from "../features/Login/login";
import LogOut from "../features/Logout/logOut";
import PrivateRoute from "../Utils/privateRoute";
import NotFound from "../features/NotFound/notFound";

const Container = () => {
return(
    <Routes>

        <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />

    <Route path='/login' element={<Login />} />
    <Route path='/*' element={<NotFound/>}/>

    <Route path='/logout' element={<LogOut />} />

    </Routes>
)
}
export default Container