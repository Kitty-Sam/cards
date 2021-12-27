import React, {ChangeEvent, useState} from 'react';
import styleCommon from "../../style/Common.module.css";
import styleProfile from "./Profile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {LogOutTC, setUserDataAC, UserType} from "../Login/LoginTC";
import {AppStoreType} from "../../Store/store";
import {Link, Navigate} from "react-router-dom";
import {profileAPI} from '../../api/profileApi';

const Profile = () => {
    const user = useSelector<AppStoreType, UserType>(state => state.login.user)
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [editMode, setEditMode] = useState<boolean>(false);
    const userAvatar = useSelector<AppStoreType, string | undefined>(state => state.login.user.avatar)


    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)

    const onChangeHandlerName = (event: ChangeEvent<HTMLInputElement>): void => {
        setName(event.currentTarget.value);
    };
    const onChangeHandlerEmail = (event: ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.currentTarget.value);
    };

    const data = {
        avatar: "https://tlgrm.ru/_/stickers/837/98f/83798fe7-d57e-300a-93fa-561e3027691e/2.jpg",
        name,
        email
    }

    const activateEditForm = (): void => setEditMode(true);
    const hideEditForm = (): void => {
        setEditMode(false);
    };

    const onSendButtonClick = () => {
        profileAPI.updateUser(data).then((res) => {
        dispatch(setUserDataAC( res.data.updatedUser))
        })
    }
    const onPhotoSelected = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.files) {
        }
    };

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
            <div><img src={userAvatar ? userAvatar : ""} alt={'userAvatar'} className={styleProfile.avatar}/></div>
            {editMode ? (
                <div><input
                    name="name"
                    value={name}
                    onChange={onChangeHandlerName}
                    onBlur={hideEditForm}
                /></div>
            ) : (
                <span onDoubleClick={activateEditForm}>userName: {user.name}</span>
            )}
            {editMode ? (
                <div><input
                    name="email"
                    value={email}
                    onChange={onChangeHandlerEmail}
                    onBlur={hideEditForm}
                /></div>
            ) : (
                <span onDoubleClick={activateEditForm}>userEmail: {user.email}</span>
            )}
            <div className={styleProfile.btns}>
                <button onClick={onLogOutButtonClick}>LogOut</button>
                <button onClick={onSendButtonClick}>send</button>
                <Link to="packs"> Packs </Link>
            </div>

        </div>
    );
};

export default Profile;