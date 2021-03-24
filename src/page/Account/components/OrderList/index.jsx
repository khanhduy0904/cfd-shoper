import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import cartApi from "../../../../api/cartApi"
import Pagination from "../../../../components/Pagination"
import OrderItem from './OrderItem'

export default function OrderList() {

    let [state, setState] = useState({
        list: [],
        paginate: null
    })
    useEffect(() => {
        let fetchApi = async () => {
            let res = await cartApi.getAllOrder();
            setState({
                list: res.data,
                paginate: res.paginate
            })
        }   
        fetchApi();
     
    }, [])

    // let list = [
    //     {
    //         id: '673290789',
    //         date: '01 Oct, 2019',
    //         status: 'Awating Delivery',
    //         amount: '$259.00',
    //         item: [
    //             {
    //                 image: '/img/products/product-5.jpg'
    //             },
    //             {
    //                 image: '/img/products/product-112.jpg'
    //             },
    //             {
    //                 image: '/img/products/product-7.jpg'
    //             },
    //             {
    //                 image: '/img/products/product-5.jpg'
    //             },
    //             {
    //                 image: '/img/products/product-5.jpg'
    //             },
    //         ]
    //     },
    //     {
    //         id: '871090437',
    //         date: '25 Sep, 2019',
    //         status: 'In Processing',
    //         amount: '$75.00',
    //         item: [
    //             {
    //                 image: '/img/products/product-11.jpg'
    //             },
    //         ]
    //     },
    //     {
    //         id: '891230563',
    //         date: '07 Sep, 2019',
    //         status: 'Delivered',
    //         amount: '$69.00',
    //         item: [
    //             {
    //                 image: '/img/products/product-14.jpg'
    //             },
    //             {
    //                 image: '/img/products/product-15.jpg'
    //             },
    //         ]
    //     }
    // ]

    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Order */}
            {
                state.list.map(e => <OrderItem key={e.id} {...e} />)
            }

            {/* Order */}
            {/* Pagination */}
            <Pagination {...state.paginate}/>
        </div>
    )
}



