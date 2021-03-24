import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userApi from '../../../../api/userApi';

function WishListItem({ name, images, real_price, discount, price, slug, _id }) {

    let [remove, setRemove] = useState(false);

    const removeItem = () => {
        userApi.removeWishlist(_id)
        setRemove(true)
    }

    if(remove) return null;

    return (
        <div className="col-6 col-md-4">
            <div className="card mb-7">
                {/* Image */}
                <div className="card-img">
                    {/* Action */}
                    <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" onClick={removeItem}>
                        <i className="fe fe-x" />
                    </button>
                    {/* Button */}
                    <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                        <i className="fe fe-eye mr-2 mb-1" /> Quick View
                    </button>
                    {/* Image */}
                    <img className="card-img-top" src={images?.[0]?.medium_url} alt="..." />
                </div>
                {/* Body */}
                <div className="card-body font-weight-bold text-center">
                    <Link className="text-body" to={`product/${slug}`}>{name}</Link> <br />
                    <span>
                        <span className="font-size-xs text-gray-350 text-decoration-line-through">{new Intl.NumberFormat('vn').format(price)}</span>
                        <span className="text-primary">{new Intl.NumberFormat('vn').format(real_price)}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default WishListItem;