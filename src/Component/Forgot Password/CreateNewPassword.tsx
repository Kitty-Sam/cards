import React, {ChangeEvent, useState} from 'react';
import styleCommon from "../../style/Common.module.css";
import {Navigate, useParams} from "react-router-dom";
import {addNewPassAPI} from "../../api/forgotPasswordApi";
import {useDispatch} from "react-redux";

const CreateNewPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [loadedStatus, setLoadedStatus] = useState(false);

    const dispatch = useDispatch();

    const params = useParams<'token'>();
    const { token } = params as { token: string };

    const data: any = {
        password: newPassword,
        resetPasswordToken: token,
    };

    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.currentTarget.value)
    }

    const onCreateButtonClick = () => {
        addNewPassAPI.setNewPass(data).then((res) => {
            setLoadedStatus((prev) => true)
        })

    }

    if (loadedStatus) {
        return <Navigate to={'/login'}/>
    }
    return (
        <div className={styleCommon.wrapper}>
            <div>Learning game</div>
            <div>Create new password?</div>
            <div><input placeholder={"Password"} onChange={onChangePasswordHandler} value={newPassword}/></div>
            <div>Create new password and we will send you further instructions to email</div>
            <div><button onClick={onCreateButtonClick}
            >Create new password</button> </div>

        </div>
    );
};

export default CreateNewPassword;