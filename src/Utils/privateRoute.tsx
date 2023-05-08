import React, { useState, useEffect } from "react";
import { useSelector ,useDispatch} from "react-redux";
import {Navigate, NavigateProps} from "react-router-dom";

interface Props {
    children : any
}

const PrivateRoute: React.FC <Props>= ({children}) => {

const login = useSelector((state:any) => state.user)

if (login.isLoggedIn){
    return children

}
else {
    return <Navigate  to="login" />

}


};

export default PrivateRoute;
