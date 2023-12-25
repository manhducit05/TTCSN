import { useNavigate } from "react-router-dom"
import { deleteAllCookie } from "../helper/cookie";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { checkLogin } from '../actions/login';

function Logout(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    deleteAllCookie();
    useEffect(()=>{
        navigate("/");
        dispatch(checkLogin(false))
    },[])
}
export default Logout