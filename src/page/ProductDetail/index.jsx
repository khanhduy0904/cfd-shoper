import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router'
import productApi from '../../api/productApi';
import Breadcrumb from '../../components/Breadcrumb'
import { addToCart } from '../../redux/reducers/cartReducer';
import Description from './components/Description';

export default function ProductDetail() {

    let routeMatch = useRouteMatch();
    let [product, setProduct] = useState();
    let [amount, setAmount] = useState(1);
    let [currentImage, setCurrentImage] = useState(0);
    let dispatch = useDispatch();
    useEffect(() => {
        productApi.detail(routeMatch.params.slug).then(res => {
            if (res.data.length > 0) {
                setProduct(res.data[0])
            }
        })
    }, [routeMatch.params.slug]);
    
    if (!product) return null;
    console.log(product);
    let real_price_text = new Intl.NumberFormat('vn').format(product.real_price);
    let price_text = new Intl.NumberFormat('vn').format(product.price);
    let { images } = product;

    const sliderItemClick = (index) => {
        setCurrentImage(index)
    }
    const changeAmount = (e) => {
        console.log(e.target.value);
        setAmount(parseInt(e.target.value))
    }

    return (
    <>
        <section className="product-detail">
            <Breadcrumb
                list={[
                    {
                        title: "Home",
                        link: "/"
                    },
                    {
                        title: "Catalog",
                        link: "/catalog"
                    },
                    {
                        title: "Giày",
                        link: "/"
                    },
                ]}
            />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                {/* Card */}
                                <div className="card">
                                    {/* Badge */}
                                    {
                                        product?.discount_rate > 0 ? <div className="badge badge-primary card-badge text-uppercase">
                                            - {product.discount_rate}%
                                    </div> : null
                                    }
                                    {/* Slider */}
                                    <div className="mb-4" data-flickity="{&quot;draggable&quot;: false, &quot;fade&quot;: true}" id="productSlider">
                                        {/* Item */}
                                        {
                                            images?.map((e, index) => (
                                                <a key={index} href={e.large_url} className={currentImage === index ? "active" : ""}>
                                                    <img src={e.medium_url} alt="..." className="card-img-top" />
                                                </a>
                                            ))
                                        }

                                    </div>
                                </div>
                                {/* Slider */}
                                <div className="flickity-nav mx-n2 mb-10 mb-md-0 slider-thumbnail">
                                    {/* Item */}
                                    {
                                        images.map((e, index) => (
                                            <div key={index} className={`col-12 px-2 ${currentImage === index ? "active" : ""}`} style={{ maxWidth: '113px' }}
                                                onClick={() => sliderItemClick(index)}
                                            >
                                                {/* () => sliderItemClick(index) <=> sliderItemClick.bind(null, index) */}
                                                {/* Image */}
                                                <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: `url(${e.small_url})` }} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-6 pl-lg-10">
                                {/* Header */}
                                <div className="row mb-1">
                                    <div className="col">
                                        {/* Preheading */}
                                        <a className="text-muted" href="shop.html">Sneakers</a>
                                    </div>
                                    <div className="col-auto">
                                        {/* Rating */}
                                        <div className="rating font-size-xs text-dark" data-value={4}>
                                            <div className="rating-item">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="rating-item">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="rating-item">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="rating-item">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="rating-item">
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <a className="font-size-sm text-reset ml-2" href="#reviews">
                                            Reviews (6)
                                        </a>
                                    </div>
                                </div>
                                {/* Heading */}
                                <h3 className="mb-2">{product?.name}</h3>
                                {/* Price */}
                                <div className="mb-7">
                                    <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">{price_text} VND</span>
                                    <span className="ml-1 font-size-h5 font-weight-bolder text-primary">{real_price_text} VND</span>
                                    <span className="font-size-sm ml-1">({product?.stock_item.qty > 0 ? "Còn Hàng" : "Hết Hàng"})</span>
                                </div>
                                {/* Form */}

                                {
                                    product?.configurable_options?.map((e, index) => (
                                        <div className="form-group product-option" key={index}>
                                            {/* Label */}
                                            <p className="mb-5">
                                                {e.name} : {e.values.map((e1, index1) => <span className="option-value" key={index1}>{e1.label}</span>)}
                                            </p>
                                            {/* Radio */}
                                            {/* <div className="mb-8 ml-n1">
                                                    {
                                                        product.configurable_options.map((e, index) => (
                                                            e.images.map((e1, index1) => (
                                                                <div key={index} className="custom-control custom-control-inline custom-control-img">
                                                                <input type="radio" className="custom-control-input" id="imgRadioOne" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" defaultValue="White" defaultChecked />
                                                                <label className="custom-control-label" htmlFor="imgRadioOne">
                                                                    <span className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: `url(${e1.small_url})` }} />
                                                                </label>
                                                            </div>
                                                            ))
                                                            
                                                        ))
                                                    }

                                                </div> */}
                                        </div>
                                    ))
                                }

                                <div className="form-group">
                                    {/* Label */}

                                    <div className="form-row mb-7">
                                        <div className="col-12 col-lg-auto">
                                            {/* Quantity */}
                                            <select className="custom-select mb-2" onChange={changeAmount}>
                                                {
                                                    [...Array(10)].map((e, i) => (
                                                        <option key={i} value={i + 1} selected={(i + 1) === amount}>{i + 1}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="col-12 col-lg">
                                            {/* Submit */}
                                            <button type="submit" className="btn btn-block btn-dark mb-2" onClick={() => dispatch(addToCart({...product, cartNum: amount}))}>
                                                Add to Cart <i className="fe fe-shopping-cart ml-2" />
                                            </button>
                                        </div>
                                        <div className="col-12 col-lg-auto">
                                            {/* Wishlist */}
                                            <button className="btn btn-outline-dark btn-block mb-2" data-toggle="button">
                                                Wishlist <i className="fe fe-heart ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Text */}
                                    
                                    {/* Share */}
                                    <p className="mb-0">
                                        <span className="mr-4">Share:</span>
                                        <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                            <i className="fab fa-pinterest-p" />
                                        </a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Description description={product?.description}/>
    </>    
    )
}
