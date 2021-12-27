import React from 'react';
import styleCommon from "../../style/Common.module.css";
import {useDispatch, useSelector} from "react-redux";
import {LogOutTC} from "../Login/LoginTC";
import {AppStoreType} from "../../Store/store";
import {Navigate} from "react-router-dom";

const Profile = () => {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)

    const dispatch = useDispatch();
    const onLogOutButtonClick = () => {
        dispatch(LogOutTC())
    }
   if (!isLoggedIn) {
        return <Navigate to={'login'}/>
    }
    return (
        <div className={styleCommon.wrapper}>
            <h1>profile</h1>
            <div>
                <button onClick={onLogOutButtonClick}>LogOut</button>
            </div>

        </div>
    );
};

export default Profile;