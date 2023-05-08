import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {useEffect} from "react";

const LogOut = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    useEffect(() => {

        redirectTologin()



    }, [])

    const redirectTologin = () => {

        localStorage.clear()
        sessionStorage.clear()


        history("/login");

    }
    return (null)


}
export default LogOut