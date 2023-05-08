import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "./loginSlice";
import "./login.scss"
import {useNavigate} from "react-router";
const Login = () => {
    const dispatch = useDispatch();
const navigate = useNavigate()
    const [userName ,setUserName]=useState("")
    const [password ,setPassword]=useState("")
    const submit = (e:any)=>{

        e.preventDefault()
        dispatch(signIn({userName , password}))
        navigate("/")
    }
return(
    <div className="login">
            <label>نام کاربری</label>
            <input placeholder="نام کاربری" type="text" name="userName" value={userName} onChange={(e:any)=>setUserName(e.target.value)}/>
            <label>رمز عبور</label>

            <input type="password" placeholder="رمز عبور" name="password" value={password} onChange={(e:any)=>setPassword(e.target.value)}/>
            <button onClick={submit}>ثبت</button>
    </div>
)
}
export  default  Login