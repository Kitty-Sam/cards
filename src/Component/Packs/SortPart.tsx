import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from '../../Store/store';
import {PacksTC, sortMyPacksTC } from './PacksTC';
import {Range} from './Range'
import styleSort from "./Sort.module.css";


const SortPart = () => {    
    const dispatch = useDispatch();
    
    const onMyPacksClick = () => {
        dispatch(sortMyPacksTC())
    }

    const onAllPacksClick = () => {
        dispatch(PacksTC())
    }
    return (
        <div className={styleSort.content}>
            <div>Show packs cards</div>
            <div className={styleSort.btns}>
            <button onClick={onMyPacksClick}>My</button>
            <button onClick={onAllPacksClick}>All</button>
            </div>
            <span>Number of cards</span>
            <Range/>
        </div>
    );
};

export default SortPart;