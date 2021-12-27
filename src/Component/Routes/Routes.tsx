import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../Login/Login";
import Registration from "../Registration/Registration";
import Profile from "../Profile/Profile";
import Page404 from "../404/Page404";
import ForgotPassword from "../Forgot Password/ForgotPassword";
import CreateNewPassword from "../Forgot Password/CreateNewPassword";

const RoutesPart = () => {
    return (

            <Routes>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'registration'} element={<Registration/>}/>
                <Route path={'/'} element={<Profile/>}/>
                <Route path={'404'} element={<Page404/>}/>
                <Route path={'*'} element={<Navigate to='/404'/>}/>
                <Route path={'recover'} element={<ForgotPassword/>}/>
                <Route path={'newPassword'} element={<CreateNewPassword/>}>
                    <Route path=":token" element={<CreateNewPassword/>}/>
                </Route>
            </Routes>


    );
};

export default RoutesPart;