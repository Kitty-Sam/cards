import React, {ChangeEvent, useState} from 'react';
import styleCommon from "../../style/Common.module.css";
import {Link} from "react-router-dom";
import {addNewPassAPI, AddNewPassType} from "../../api/forgotPasswordApi";

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>("samutic40@gmail.com")

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const dataPayload: AddNewPassType = {
        email,
        from: 'test-front-admin <samutic40@gmail.com>',
        message: `<div style='background-color: #ffd500; 
padding: 15px; 
border-color: #ff9900; 
width: 250px;
height: 30px'> 
password recovery link: <a href='http://localhost:3000/cards#/newPassword/$token$'> recovery link </a></div>`,
    };


    const onSendButtonClick = () => {
        addNewPassAPI.addNewPass(dataPayload).then((res) => {
            console.log("res", res.data)
        })
    }


    return (
        <div className={styleCommon.wrapper}>
            <div>Learning game</div>
            <div>Forgot your password?</div>
            <div><input placeholder={"Email"}
            value={email} onChange={onChangeEmailHandler}/></div>
            <div>Enter your Email and we will send you further instructions</div>
            <div><button onClick={onSendButtonClick}>Send instructions</button> </div>
            <div>Did you remember your password?</div>
            <Link to={"/login"}> Try logging in </Link>
        </div>
    );
};

export default ForgotPassword;