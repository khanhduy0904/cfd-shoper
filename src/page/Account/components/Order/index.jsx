import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import cartApi from '../../../../api/cartApi';
import helper from '../../../../components/helper';
import OrderDetailItem from './OrderDetailItem';

export default function Order() {

    let [order, setOrder] = useState(null);
    let {_id} = useRouteMatch().params; 

    useEffect(() => {
        let fetchApi = async () => {
            let res = await cartApi.getOrder(_id);
            if(res.data){
                setOrder(res.data)
            }
        }

        fetchApi();
    },[_id])
    if(!order) return null;
    let { list, tax, shippingFee, status } = order;
    let num = list.reduce((sum, currentItem) => sum + currentItem.cartNum, 0);
    let subtotal = list.map(e => e.cartNum * e.real_price).reduce((sum, currentValue) => sum + currentValue, 0);
    let taxNum = subtotal*tax / 100;
    let total = subtotal + taxNum + shippingFee;


    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Order */}
            <div className="card card-lg mb-5 border">
                <div className="card-body pb-0">
                    {/* Info */}
                    <div className="card card-sm">
                        <div className="card-body bg-light">
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Order No:</h6>
                                    {/* Text */}
                                    <p className="mb-lg-0 font-size-sm font-weight-bold">
                                        {_id}
                                    </p>
                                </div>
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Shipped date:</h6>
                                    {/* Text */}
                                    <p className="mb-lg-0 font-size-sm font-weight-bold">
                                        <time dateTime="2019-10-01">
                                            01 March, 2021
                                        </time>
                                    </p>
                                </div>
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Status:</h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm font-weight-bold">
                                        {status === "order" && "Đặt Hàng"}
                                        {status === "confirm" && "Đơn hàng được xác nhận"}
                                        {status === "shipping" && "Đang giao"}
                                        {status === "finish" && "Hoàn thành"}
                                    </p>
                                </div>
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Order Amount:</h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm font-weight-bold">
                                        {helper.currency(total)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    {/* Heading */}
                    <h6 className="mb-7">Order Items ({num})</h6>
                    {/* Divider */}
                    <hr className="my-5" />
                    {/* List group */}
                    <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x">
                        
                       {
                           list.map(e => <OrderDetailItem key={e._id} {...e}/>)
                       }
                    </ul>
                </div>
            </div>
            {/* Total */}
            <div className="card card-lg mb-5 border">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">Order Total</h6>
                    {/* List group */}
                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                        <li className="list-group-item d-flex">
                            <span>Subtotal</span>
                            <span className="ml-auto">{helper.currency(subtotal)}</span>
                        </li>
                        <li className="list-group-item d-flex">
                            <span>Tax</span>
                            <span className="ml-auto">{helper.currency(taxNum)}</span>
                        </li>
                        <li className="list-group-item d-flex">
                            <span>Shipping</span>
                            <span className="ml-auto">{helper.currency(shippingFee)}</span>
                        </li>
                        <li className="list-group-item d-flex font-size-lg font-weight-bold">
                            <span>Total</span>
                            <span className="ml-auto">{helper.currency(total)}</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Details */}
            <div className="card card-lg border">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">Billing &amp; Shipping Details</h6>
                    {/* Content */}
                    <div className="row">
                        <div className="col-12 col-md-4">
                            {/* Heading */}
                            <p className="mb-4 font-weight-bold">
                                Billing Address:
                      </p>
                            <p className="mb-7 mb-md-0 text-gray-500">
                                Daniel Robinson, <br />
                        3997 Raccoon Run, <br />
                        Kingston, 45644, <br />
                        United States, <br />
                        6146389574
                      </p>
                        </div>
                        <div className="col-12 col-md-4">
                            {/* Heading */}
                            <p className="mb-4 font-weight-bold">
                                Shipping Address:
                      </p>
                            <p className="mb-7 mb-md-0 text-gray-500">
                                Daniel Robinson, <br />
                        3997 Raccoon Run, <br />
                        Kingston, 45644, <br />
                        United States, <br />
                        6146389574
                      </p>
                        </div>
                        <div className="col-12 col-md-4">
                            {/* Heading */}
                            <p className="mb-4 font-weight-bold">
                                Shipping Method:
                      </p>
                            <p className="mb-7 text-gray-500">
                                Standart Shipping <br />
                        (5 - 7 days)
                      </p>
                            {/* Heading */}
                            <p className="mb-4 font-weight-bold">
                                Payment Method:
                      </p>
                            <p className="mb-0 text-gray-500">
                                Debit Mastercard
                      </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
