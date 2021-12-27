import React from 'react';
import {useDispatch} from 'react-redux';
import {PacksTC, setCurrentPageAC} from './PacksTC';
import styleTable from "./Table.module.css";

export type PaginationPropsType = {
    totalCount: number,
    pageCount: number,
    currentPage: number
}

const Pagination = (props: PaginationPropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageCount / 9)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const dispatch = useDispatch();
    const onPaginationPaged = (page: number) => {
        dispatch(setCurrentPageAC(page))
        dispatch(PacksTC())
    }



return (
    <div>

        {pages.map((page: number, index) => <button key={index}
                                                    className={props.currentPage === page ? styleTable.selectedPage : ""}

                                                    onClick={() => {
                                                        onPaginationPaged(page)
                                                    }}

        >{page}</button>)}

    </div>
);
};

export default Pagination;