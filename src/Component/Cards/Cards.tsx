import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {AppStoreType} from '../../Store/store';
import {getCardsTC} from './CardsTC';

const Cards = () => {


    const cards = useSelector<AppStoreType, any>(state => state.cards.cards)

    console.log("cards", cards)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const params = useParams<'cardsPack_id'>();
    const {cardsPack_id} = params as { cardsPack_id: string };

    const onClickRemoveCard = (_id: string): void => {
        /*  dispatch(removeCardTC(_id));
          dispatch(setErrorMessageNetworkAC(''));*/
    };
    const onClickAddCard = (): void => {
        navigate('/card');
    };

    const resultCard = cards.map((card: any) => <div>
        <div>{card.name}</div>
        <div>{card.question}</div>
        <div>{card.answer}</div>
        <div>{card.updated}</div>
        <div style={{display: 'flex'}}>
            <button>updated</button>
            <button>delete</button>
        </div>


    </div>)

    useEffect(() => {
        if (!cardsPack_id) {
            return;
        }
        dispatch(getCardsTC(cardsPack_id));
    }, []);
    return (
        <div>
            <button> add new card</button>
            {resultCard}

        </div>
    );
};

export default Cards;