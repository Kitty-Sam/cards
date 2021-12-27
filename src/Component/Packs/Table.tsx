import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Navigate} from 'react-router-dom';
import { updatedPackType } from '../../api/packsApi';
import {AppStoreType} from '../../Store/store';
import {addPackTC, PacksTC, PackTemplate, removePackTC, ResponsePacksType, setCurrentPageAC, updatedPackTC} from './PacksTC';
import Pagination from './Pagination';
import styleTable from "./Table.module.css";

const Table = () => {

    // const [name, setName] = useState("");

    const dispatch = useDispatch();
    // const [editMode, setEditMode] = useState<boolean>(false);

    // const onChangeHandlerName = (event: ChangeEvent<HTMLInputElement>): void => {
    //     setName(event.currentTarget.value);
    // };
    // const activateEditForm = (): void => setEditMode(true);
    //
    // const hideEditForm = (_id: string, name: string): void => {
    //     setEditMode(false);
    //     dispatch(updatedPackTC({_id, name}));
    // };

    const packs = useSelector<AppStoreType, PackTemplate[]>(state => state.packs.cardPacks)
    const currentPage = useSelector<AppStoreType, number>(state => state.packs.page)
    const pageCount = useSelector<AppStoreType, number>(state => state.packs.pageCount)
    const totalCount = useSelector<AppStoreType, number>(state => state.packs.cardPacksTotalCount)
    
  


    const onClickAddPacksHandler = () => {
        dispatch(PacksTC())
    }

    const onClickAddPackHandler = () => {
        dispatch(addPackTC({}))
    }

    const onDeleteButtonClick = (id: string) => {
        dispatch(removePackTC(id));
    }

   

    const onUpdateButtonClick = (_id: string) => {
          console.log("wheeee")
        // dispatch(updatedPackTC({_id, name}));
    }



    const resultPacks = packs.map((pack: PackTemplate) =>
        <div className={styleTable.table} key={pack._id}>
            <div className={styleTable.tableEl}>{pack.name}</div>
          

           {/* {editMode ? (
                <div className={styleTable.tableEl}><input
                    name="name"
                    value={name}
                    onChange={onChangeHandlerName}
                    onBlur={()=>{hideEditForm(pack._id, name)}}
                /></div>
            ) : (
                <span className={styleTable.tableEl} onDoubleClick={activateEditForm}>{pack.name}</span>
            )}*/}
            <div className={styleTable.tableElSmall}>{pack.cardsCount}</div>
            <div className={styleTable.tableEl}>{pack.user_name}</div>
            <div className={styleTable.tableEl}>{pack.updated}</div>
            <div>
                <button onClick={() => onDeleteButtonClick(pack._id)}>del</button>
            </div>
            <div>
                <button onClick={() => onUpdateButtonClick(pack._id)}>update</button>
            </div>
            <Link to={'/cards'}> cards </Link>
        </div>)

    return (
        <div className={styleTable.content}>
            <button onClick={onClickAddPacksHandler}>add packs</button>
            <div> Packs list </div>
            <div>
                <input placeholder='search'/>
                <button onClick={onClickAddPackHandler}>Add new pack</button>
            </div>
            
         <Pagination pageCount={pageCount} currentPage={currentPage} totalCount={totalCount} key={Math.random() * 100000}/>
            
            <div className={styleTable.table}>
                <div className={styleTable.tableEl}>Name</div>
                <div className={styleTable.tableElSmall}>CardsCount</div>
                <div className={styleTable.tableEl}>Created by</div>
                <div className={styleTable.tableEl}>Updated</div>
            </div>
            {resultPacks}
        </div>
    );
};

export default Table;

