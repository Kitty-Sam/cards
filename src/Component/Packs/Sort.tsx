import React from 'react';
import styleSort from "./Sort.module.css";

const Sort = () => {
    return (
        <div className={styleSort.arrows}>
            <div className={styleSort.arrowUp}></div>
            <div className={styleSort.arrowDown}></div>            
        </div>
    );
};

export default Sort;