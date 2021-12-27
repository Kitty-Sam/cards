import React, {useEffect} from 'react';
import './App.css';
import RoutesPart from "./Component/Routes/Routes";
import {AppTC, requestStatus, RequestStatusType} from "./Component/Registration/AppAC";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./Store/store";
import {NavLink} from 'react-router-dom';

function App() {

    const statusApp = useSelector<AppStoreType, RequestStatusType>(state => state.app.status)

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(AppTC())
    }, [dispatch])


    return (
        <div>

            <div>
                <NavLink to={'login'}>login</NavLink>---
                <NavLink to={'/'}>profile</NavLink>---
                <NavLink to={'registration'}>registration</NavLink>---
                <NavLink to={'recover'}>recover</NavLink>---
                <NavLink to={'*'}>404</NavLink>---
                <NavLink to={'newPassword/:token'}>create new</NavLink>---
                <NavLink to={'packs'}>packs</NavLink>----
                <NavLink to={'cards'}>cards</NavLink>
            </div>

            {statusApp === requestStatus.loading ? <div> loading... </div> :  <RoutesPart/>  }


        </div>

    );
}

export default App;
