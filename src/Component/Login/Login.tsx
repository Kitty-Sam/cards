import React, {ChangeEvent, useState} from 'react';
import styleCommon from './../../style/Common.module.css'
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {LoginTC} from "./LoginTC";
import {AppStoreType} from "../../Store/store";

export const Login = () => {
    const [email, setEmail] = useState<string>("trolololo@gmail.com")
    const [password, setPassword] = useState<string>("123456789As")
    const [rememberMe, setCheckBox] = useState<boolean>(false)

    const dispatch = useDispatch();

    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckBox(e.currentTarget.checked)
    }


    const onLoginButtonClick = () => {
        dispatch(LoginTC({email, password, rememberMe}))
    }
    console.log("checkBox", rememberMe)
  if (isLoggedIn) {
      return <Navigate to={"/"}/>
  }

    return (

        <div className={styleCommon.wrapper}>
            <div>Learning game</div>
            <div>Sign in</div>
            <div><input placeholder={"Email"}
                        value={email} onChange={onChangeEmailHandler}/></div>
            <div><input placeholder={"Password"}
                        value={password} onChange={onChangePasswordHandler}/></div>
            <div><input placeholder={"remember me"} type={"checkbox"}
                       checked={rememberMe} onChange={onChangeCheckBoxHandler}/></div>
            <Link to={"/recover"}> Forgot your password? </Link>
            <div><button onClick={onLoginButtonClick}>Login</button> </div>
            <div>Dont have an account</div>
            <Link to={"/registration"}> Sign up </Link>
        </div>

    );
};

