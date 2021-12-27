import React from 'react';
import SortPart from './SortPart';
import Table from './Table';
import stylePacks from "./Packs.module.css";
import { Navigate } from 'react-router-dom';
import { AppStoreType } from '../../Store/store';
import { useSelector } from 'react-redux';





const Packs = () => {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to={'login'}/>
    }
    return (
        <div className={stylePacks.content}>
            <SortPart/>
            <Table/>
            
        </div>
    );
};

export default Packs;

