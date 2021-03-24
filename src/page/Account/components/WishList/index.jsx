import React, { useEffect, useState } from 'react';
import userApi from '../../../../api/userApi';
import WishListItem from "./WishListItem";
import Pagination from "../../../../components/Pagination";
import {serializeObjtoURL, convertQueryToObject} from "../../../../components/helper"

export default function Wishlist() {

    let [state, setState] = useState({
        list: [],
        paginate: null
    })
    let queryUrl = convertQueryToObject();
    let queryString = serializeObjtoURL(queryUrl);
    useEffect(() => {
        const fetchApi = async () => {
            let res = await userApi.getWithList(queryString);
            setState({
                list: res.data,
                paginate: res.paginate
            })
        }
        fetchApi();
    }, [queryString]);

    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Products */}
            <div className="row">
                {/* Item */}
                {
                    state.list.map((e, i) => <WishListItem key={i} {...e} />)
                }

            </div>
            {/* Pagination */}
            <Pagination {...state.paginate} />
        </div>
    )
}
