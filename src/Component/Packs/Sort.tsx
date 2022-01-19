import React from 'react';
import { useDispatch } from 'react-redux';
import { sortUpPacksTC } from './PacksTC';
import styleSort from "./Sort.module.css";

const Sort = () => {
    const dispatch = useDispatch();

    const up = '1updated'
    const down = '0updated';
    const upCards = '0cardsCount'
    const downCards = '1cardsCount';
    
    const onUpSortClick = () => {
        dispatch(sortUpPacksTC(upCards))
    }

    const onDownSortClick = () => {
        dispatch(sortUpPacksTC(downCards))
    }
    return (
        <div className={styleSort.arrows}>
            <div className={styleSort.arrowUp} onClick={onUpSortClick}></div>
            <div className={styleSort.arrowDown} onClick={onDownSortClick}></div>
        </div>
    );
};

export default Sort;