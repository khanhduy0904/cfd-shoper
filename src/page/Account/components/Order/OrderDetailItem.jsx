import React from 'react';
import helper from '../../../../components/helper';
import { Link } from "react-router-dom"

function OrderDetailItem({name, images, cartNum, real_price, slug}) {
    let amount = helper.currency(real_price*cartNum)
    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-4 col-md-3 col-xl-2">
                    {/* Image */}
                    <Link to={`/product/${slug}`}><img src={images?.[0]?.medium_url} alt="..." className="img-fluid" /></Link>
                </div>
                <div className="col">
                    {/* Title */}
                    <p className="mb-4 font-size-sm font-weight-bold">
                        <Link className="text-body" to={`/product/${slug}`}>{name}</Link> <br />
                        <span className="text-muted">{amount}</span>
                    </p>
                   
                </div>
            </div>
        </li>
    );
}

export default OrderDetailItem;