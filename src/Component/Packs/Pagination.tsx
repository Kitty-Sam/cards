import React from 'react';
import {useDispatch} from 'react-redux';
import {PacksTC, setCurrentPageAC} from './PacksTC';
import styleTable from "./Table.module.css";

export type PaginationPropsType = {
    totalCount: number,
    pageCount: number,
    currentPage: number
}

export const Pagination = (props: PaginationPropsType) => {
    const pages: number[] = [];
    let pagesCount = Math.ceil(props.totalCount / props.pageCount )
    createPages(pages, props.totalCount,props.currentPage )

    function createPages(pages: number[], pagesCount: number, currentPage: number) {
        if (pagesCount > 20) {
            if (currentPage > 10) {
                for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                    pages.push(i)
                    if (i == pagesCount) break
                }
            } else {
                for (let i = 1; i <= 15; i++) {
                    pages.push(i)
                    if (i == pagesCount) break
                }
            }
        } else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
        }
    }



  /*  let pagesCount = Math.ceil(props.totalCount / props.pageCount / 30)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const onPaginationPaged = (page: number) => {
        dispatch(PacksTC(page))
    }
*/
    const dispatch = useDispatch();

    return (
        <div>

            {pages.map((page: number, index) => <button key={index}
                                                        className={props.currentPage === page ? styleTable.selectedPage : ""}

                                                        onClick={() => {
                                                            dispatch(setCurrentPageAC(page))
                                                            dispatch(PacksTC(page))
                                                        }}

            >{page}</button>)}

        </div>
    );
};

