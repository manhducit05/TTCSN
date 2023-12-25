import { useNavigate } from 'react-router-dom';
import './login.css'
import { getCookie, setCookie } from '../helper/cookie';
import { useDispatch } from 'react-redux';
import { checkLogin } from '../actions/login';
const Login = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleSubmit = (e)=>{  
        e.preventDefault();
        if(e.target[0].value =="admin" && (e.target[1].value)== "1"){
            setCookie("token",e.target[0].value,1);
            dispatch(checkLogin(true))
            navigate("/")
        }
        
        else alert("Tài khoản hoặc mật khẩu không đúng!")

    }
    const handleCancel = ()=>{
        const form = document.querySelector("form");
        form.reset();
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='id'>Tên đăng nhập: </label>
            <input id="id" type="text" required></input>
            <label htmlFor='pass'>Mật khẩu: </label>
            <input id="pass" type="password" required></input>
            <input type="button" value='Huỷ'onClick={handleCancel}></input>
            <input type="submit" value='Đăng nhập'></input>
            <div className="failure"></div>
        </form>
        </>
    )
}
export default Login;