import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/reducers/cartReducer';
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from 'react-router-dom';
import { addWithList } from '../../../redux/reducers/productReducer';

export default function Product(props) {

    let dispatch = useDispatch();
    let { name, images, real_price_text, rating_average, discount_rate, loading, slug } = props;
    let image1 = images?.[0]?.medium_url;
    let image2 = images?.[0]?.medium_url;
    // let dispatch = useDispatch();



    return (
        <div className="card mb-7">
            {/* Badge */}
            {/* {
                !loading && <div className="badge badge-white card-badge card-badge-left text-uppercase">
                    New
                </div>
            } */}
            {/* <div className="badge badge-white card-badge card-badge-left text-uppercase">
                New
            </div> */}
            {/* Image */}
            <div className="card-img">
                {/* Image */}
                <Link className="card-img-hover" to={`/product/${slug}`}>
                    {
                        loading ? <Skeleton variant="rect" width={"100%"} height={200} /> :
                            <>
                                {
                                    image1 && <img className="card-img-top card-img-back" src={image1} alt="..." />
                                }
                                {
                                    image2 ? <img className="card-img-top card-img-front" src={image2} alt="..." /> :
                                        <img className="card-img-top card-img-back" src={image1} alt="..." />
                                }
                            </>
                    }
                    {
                        discount_rate > 0 ? <p className="discount_rate">{discount_rate}%</p> : null
                    }

                    {/* <img className="card-img-top card-img-front" src="" alt="..." />
                    <img className="card-img-top card-img-back" src="" alt="..." /> */}

                </Link>
                {/* Actions */}
                <div className="card-actions">
                    <span className="card-action">
                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                            <i className="fe fe-eye" />
                        </button>
                    </span>
                    <span className="card-action">
                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button" onClick={dispatch.bind(null, addToCart(props))}>
                            <i className="fe fe-shopping-cart" />
                        </button>
                        {/* <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button" >
                            <i className="fe fe-shopping-cart" />
                        </button> */}
                    </span>
                    <span className="card-action">
                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button" onClick={() => addWithList(props)}>
                            <i className="fe fe-heart" />
                        </button>
                    </span>
                </div>
            </div>
            
            {/* Body */}
            <div className="card-body px-0">
                {/* Category */}
                {
                    loading ? <Skeleton height={40} /> : <div className="font-weight-bold">
                        <div className="front-size-xs">
                            <span >{rating_average} ⭐</span>
                        </div>
                        <Link className="text-body" to={`/product/${slug}`}>
                            {name}
                        </Link>
                    </div>
                }
                {/* <div className="font-size-xs">
                    <a className="text-muted" href="shop.html">Shoes</a>
                </div>
         
                <div className="font-weight-bold">
                    <a className="text-body" href="product.html">
    
                        
                    </a>
                </div> */}
                {/* Price */}
                {
                    loading ? <Skeleton /> : <div className="font-weight-bold text-muted">
                        {real_price_text} VND
                    </div>
                }

            </div>
        </div>
    )
}
