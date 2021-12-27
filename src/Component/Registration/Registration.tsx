import React, {ChangeEvent, useState} from 'react';
import styleCommon from "../../style/Common.module.css";
import styleRegister from "./Registration.module.css";
import {useDispatch, useSelector} from "react-redux";
import {RegisterTC} from './RegisterTC';
import {AppStoreType} from "../../Store/store";
import {Navigate} from "react-router-dom";
import {requestStatus, RequestStatusType} from "./AppAC";
import {setNetworkErrorAC} from "./ErrorAC";


const Registration = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    const dispatch = useDispatch();
    const isAuth = useSelector<AppStoreType, boolean>(state => state.register.isAuth)
    const statusApp = useSelector<AppStoreType, RequestStatusType>(state => state.app.status)
    const errorNetwork = useSelector<AppStoreType, string>(state => state.errors.errorNetwork)


    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const onChangeRepeatPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.currentTarget.value)
    }

    const onRegisterButtonClick = () => {
        dispatch(RegisterTC({email, password}))
    }
    const onCancelButtonClick = () => {
        dispatch(setNetworkErrorAC(" "))
        setEmail("")
        setPassword("")
        setRepeatPassword("")
    }


    if (isAuth) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div>
            {statusApp === requestStatus.loading ? <div>Loading...</div> : (
                <div className={styleCommon.wrapper}>
                    <div>Learning game</div>
                    <div>Sign up</div>
                    {errorNetwork ? <span>{errorNetwork}</span>: <span></span>}
                    <div>
                        <input placeholder="Email"
                               value={email} onChange={onChangeEmailHandler}/></div>
                    <div>
                        <input placeholder="Password"
                               value={password} onChange={onChangePasswordHandler}/></div>
                    <div>
                        <input placeholder="Confirm password"
                               value={repeatPassword} onChange={onChangeRepeatPasswordHandler}/></div>
                    <div className={styleRegister.btns}>
                        <div>
                            <button onClick={onCancelButtonClick}>Cancel</button>
                        </div>
                        <div>
                            <button onClick={onRegisterButtonClick}>Register</button>
                        </div>
                    </div>

                </div>)}

        </div>
    );
};

export default Registration;