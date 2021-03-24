import React from 'react'
import ReactDOM from 'react-dom'

export default function ModelProduct() {
    return ReactDOM.createPortal(
        <div className="modal fade" id="modalProduct" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div className="modal-content">
                    {/* Close */}
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fe fe-x" aria-hidden="true" />
                    </button>
                    {/* Content */}
                    <div className="container-fluid px-xl-0">
                        <div className="row align-items-center mx-xl-0">
                            <div className="col-12 col-lg-6 col-xl-5 py-4 py-xl-0 px-xl-0">
                                {/* Image */}
                                <img className="img-fluid" src="/img/products/product-7.jpg" alt="..." />
                                {/* Button */}
                                <a className="btn btn-sm btn-block btn-primary" href="./product.html">
                                    More Product Info <i className="fe fe-info ml-2" />
                                </a>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-7 py-9 px-md-9">
                                {/* Heading */}
                                <h4 className="mb-3">Leather Sneakers</h4>
                                {/* Price */}
                                <div className="mb-7">
                                    <span className="h5">$85.00</span>
                                    <span className="font-size-sm">(In Stock)</span>
                                </div>
                                {/* Form */}
                                <form>
                                    <div className="form-group">
                                        {/* Label */}
                                        <p>
                                            Color: <strong id="modalProductColorCaption">White</strong>
                                        </p>
                                        {/* Radio */}
                                        <div className="mb-8 ml-n1">
                                            <div className="custom-control custom-control-inline custom-control-img">
                                                <input type="radio" className="custom-control-input" id="modalProductColorOne" name="modalProductColor" data-toggle="form-caption" data-target="#modalProductColorCaption" defaultValue="White" defaultChecked />
                                                <label className="custom-control-label" htmlFor="modalProductColorOne">
                                                    <span className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: 'url(/img/products/product-7.jpg)' }} />
                                                </label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-img">
                                                <input type="radio" className="custom-control-input" id="modalProductColorTwo" name="modalProductColor" data-toggle="form-caption" data-target="#modalProductColorCaption" defaultValue="Black" />
                                                <label className="custom-control-label" htmlFor="modalProductColorTwo">
                                                    <span className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: 'url(/img/products/product-49.jpg)' }} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        {/* Label */}
                                        <p>
                                            Size: <strong><span id="modalProductSizeCaption">7.5</span> US</strong>
                                        </p>
                                        {/* Radio */}
                                        <div className="mb-2">
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeOne" defaultValue={6} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                <label className="custom-control-label" htmlFor="modalProductSizeOne">6</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeTwo" defaultValue="6.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled />
                                                <label className="custom-control-label" htmlFor="modalProductSizeTwo">6.5</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeThree" defaultValue={7} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                <label className="custom-control-label" htmlFor="modalProductSizeThree">7</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeFour" defaultValue="7.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" defaultChecked />
                                                <label className="custom-control-label" htmlFor="modalProductSizeFour">7.5</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeFive" defaultValue={8} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                <label className="custom-control-label" htmlFor="modalProductSizeFive">8</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeSix" defaultValue="8.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                <label className="custom-control-label" htmlFor="modalProductSizeSix">8.5</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeSeven" defaultValue={9} data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled />
                                                <label className="custom-control-label" htmlFor="modalProductSizeSeven">9</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeEight" defaultValue="9.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled />
                                                <label className="custom-control-label" htmlFor="modalProductSizeEight">9.5</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeNine" defaultValue={10} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                <label className="custom-control-label" htmlFor="modalProductSizeNine">10</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeTen" defaultValue="10.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                <label className="custom-control-label" htmlFor="modalProductSizeTen">10.5</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeEleven" defaultValue={11} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                <label className="custom-control-label" htmlFor="modalProductSizeEleven">11</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeTwelve" defaultValue={12} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                <label className="custom-control-label" htmlFor="modalProductSizeTwelve">12</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeThirteen" defaultValue={13} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                <label className="custom-control-label" htmlFor="modalProductSizeThirteen">13</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeFourteen" defaultValue={14} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                <label className="custom-control-label" htmlFor="modalProductSizeFourteen">14</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-0">
                                        <div className="form-row">
                                            <div className="col-12 col-lg-auto">
                                                {/* Quantity */}
                                                <select className="custom-select mb-2">
                                                    <option value={1} selected>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-lg">
                                                {/* Submit */}
                                                <button type="submit" className="btn btn-block btn-dark mb-2">
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
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('root2')
    )
}
