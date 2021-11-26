import React, {ChangeEvent, useEffect, useState} from 'react';
import sContainer from '../../n1-main/m1-ui/common/components/Container.module.scss'
import s from './Table.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    addCardsPackTC, deleteCardsPackTC,
    getCardsPackTC,
    setPageCountAC,
    setUserIdAfterRadioAC, updateCardPackTC
} from "../../n1-main/m2-bll/table-reducer";
import {AppStoreType} from "../../n1-main/m2-bll/store";
import {CardsPackType, CardType} from "../../n1-main/m2-bll/api/cards-api";
import SuperButton from "../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import Pagination from "./Pagination/Pagination";
import Search from "./Search/Search";
import {Settings} from "./Settings/Settings";
import {TableContent} from "./TableContent/TableContent";
import {NavLink, useParams} from "react-router-dom";
import {addCardTC, deleteCardTC, getCardsTC, updateCardTC} from "../../n1-main/m2-bll/cards-reducer";
import {v1} from "uuid";

export const Table = () => {

    const dispatch = useDispatch()

    const cardsPacks = useSelector<AppStoreType, Array<CardsPackType>>(state => state.table.cardPacks)
    const userID = useSelector<AppStoreType, string>(state => state.profile._id)
    const pageCount = useSelector<AppStoreType, number>(state => state.table.pageCount).toString()
    const page = useSelector<AppStoreType, number>(state => state.table.page)
    const packName = useSelector<AppStoreType, string>(state => state.table.packName)
    const superRadioArr = ['Profile', 'Public']  // for SuperRadio in Settings
    const sortPacks = useSelector<AppStoreType, string>(state => state.table.sortPacks)
    const min = useSelector<AppStoreType, number>(state => state.table.min)
    const max = useSelector<AppStoreType, number>(state => state.table.max)
    const cards = useSelector<AppStoreType, Array<CardType>>(state => state.cards.cards)

    const [profileOrPublic, onChangeProfileOrPublic] = useState(superRadioArr[0]) // for SuperRadio is Settings
    const {packid} = useParams<{ packid: string }>();

    const selectedCardsPack = cardsPacks.find(e => e._id === packid)


    useEffect(() => {
        if (profileOrPublic === 'Public') {
            dispatch(setUserIdAfterRadioAC(''))
        } else {
            dispatch(setUserIdAfterRadioAC(userID))
        }
        dispatch(getCardsPackTC())

        // dispatch(getCardsTC())
    }, [profileOrPublic, pageCount, page, packName, sortPacks, min, max])

    // this doesn't work, when packId changed in the
    useEffect(() => {
        console.log(packid)
        if (!!packid) {
            console.log('packid', packid)
            dispatch(getCardsTC(packid))
        }
        console.log('!!!cards',cards)
    }, [packid])

    const addPackButtonHandler = () => {
        dispatch(addCardsPackTC('BrightPack'))
    }

    const addCardButtonHandler = () => {
        dispatch(addCardTC(packid))
    }

    const setPageCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) < 1) e.currentTarget.value = '1'
        dispatch(setPageCountAC(Number(e.currentTarget.value)))
    }


    const CardsPackHeader: TableHeaderModelType = [
        {id: '1', element: 'Name'},
        {id: '2', element: 'cardsCount'},
        {id: '3', element: 'updated'},
        {id: '4', element: <SuperButton onClick={addPackButtonHandler}>Add CardPack</SuperButton>},
    ]

    const CardsHeader: TableHeaderModelType = [
        {id: '1', element: 'answer'},
        {id: '2', element: 'question'},
        {id: '3', element: 'created'},
        {id: '4', element: <SuperButton onClick={addCardButtonHandler}>Add Card</SuperButton>}
    ]

    let cardHeader = CardsHeader.map(el => {
        return {id: v1(), element: el.element}
    })

    const delCardsPackHandler = (cardPackId: string) => {
        dispatch(deleteCardsPackTC(cardPackId))
    }
    const updateCardsPackHandler = (cardPackId: string) => {
        dispatch(updateCardPackTC(cardPackId, 'BrightUpdatedName'))
    }

    const delCardsHandler = (cardId: string) => {
        dispatch(deleteCardTC(cardId))
    }

    const updateCardsHandler = (cardId: string) => {
        dispatch(updateCardTC(cardId))
    }

    // remapping arrays for TableContent
    const cardsPackMapped = cardsPacks.map(e => {
        return {
            id: e._id,
            element: [
                <NavLink className={s.item} exact to={`/table/${e._id}`}>{e.name}</NavLink>,
                e.cardsCount,
                e.updated,
                <div><SuperButton className={s.button} onClick={() => delCardsPackHandler(e._id)}>del</SuperButton>
                    <SuperButton className={s.button} onClick={() => updateCardsPackHandler(e._id)}>update</SuperButton>
                </div>
            ]
        }
    })

    const cardsMapped = cards.map(e => {
        return {id: e._id,
            element: [
                e.question,
                e.answer,
                e.created,
                <div>
                    <SuperButton className={s.button} onClick={() => delCardsHandler(e._id)}>del</SuperButton>
                    <SuperButton className={s.button} onClick={() => updateCardsHandler(e._id)}>update</SuperButton>
                </div>
            ]}
    })


    console.log('cardsPackMapped', cardsPackMapped)
    console.log('cardsMapped', cardsMapped)


    return (
        <div className={`${sContainer.container} ${s.table}`}>
            <h1>This is table of Card Packs.</h1>
            <Search/>
            <Settings setPageCountHandler={setPageCountHandler}
                      superRadioArr={superRadioArr}
                      profileOrPublic={profileOrPublic}
                      onChangeProfileOrPublic={onChangeProfileOrPublic}
            />

            <TableContent headerModel={CardsPackHeader} bodyModel={cardsPackMapped}/>
            <Pagination/>

            <h1>This is table of Cards for selected Card Pack.</h1>

            <div className={s.selectedCardPackInfo}>
                <div className={s.element}>
                    <div className={s.elementHeader}>Selected CardPack Name:</div>
                    <div className={s.elementValue}>{selectedCardsPack ? selectedCardsPack.name : ''}</div>
                </div>
                <div className={s.element}>
                    <div className={s.elementHeader}>Selected CardPack updated:</div>
                    <div className={s.elementValue}>{selectedCardsPack ? selectedCardsPack.updated : ''}</div>
                </div>
                <div className={s.element}>
                    <div className={s.elementHeader}>Selected CardPack id:</div>
                    <div className={s.elementValue}>{packid}</div>
                </div>
            </div>
            <TableContent headerModel={cardHeader} bodyModel={cardsMapped}/>


            {/**/}

            {/*<TableContent headerModel={CardsPackHeader} bodyModel={cardsPacks}/>*/}

        </div>
    );
};

type HeaderModelElementType = {
    id: string,
    element: string | JSX.Element
}

export type TableHeaderModelType = Array<HeaderModelElementType>
