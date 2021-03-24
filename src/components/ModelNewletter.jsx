import React from 'react'
import ReactDOM from 'react-dom'


export default function ModelNewletter() {
    return ReactDOM.createPortal(
        <div className="modal fade" id="modalNewsletterHorizontal" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    {/* Close */}
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fe fe-x" aria-hidden="true" />
                    </button>
                    {/* Content */}
                    <div className="row no-gutters">
                        <div className="col-12 col-lg-5">
                            {/* Image */}
                            <img className="img-fluid" src="/img/covers/cover-25.jpg" alt="..." />
                        </div>
                        <div className="col-12 col-lg-7 d-flex flex-column px-md-8">
                            {/* Body */}
                            <div className="modal-body my-auto py-10">
                                {/* Heading */}
                                <h4>Subscribe to Newsletter and get 15% Discount</h4>
                                {/* Text */}
                                <p className="mb-7 font-size-lg">
                                    On your next purchase
                    </p>
                                {/* Form */}
                                <form>
                                    <div className="form-row">
                                        <div className="col">
                                            {/* Input */}
                                            <label className="sr-only" htmlFor="modalNewsletterHorizontalEmail">Enter Email *</label>
                                            <input className="form-control form-control-sm" id="modalNewsletterHorizontalEmail" type="email" placeholder="Enter Email *" />
                                        </div>
                                        <div className="col-auto">
                                            {/* Button */}
                                            <button className="btn btn-sm btn-dark" type="submit">
                                                <i className="fe fe-send" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Footer */}
                            <div className="modal-footer pt-0">
                                {/* Checkbox */}
                                <div className="custom-control custom-checkbox">
                                    {/* Input */}
                                    <input className="custom-control-input" id="modalNewsletterHorizontalCheckbox" type="checkbox" />
                                    {/* Label */}
                                    <label className="custom-control-label font-size-xs" htmlFor="modalNewsletterHorizontalCheckbox">
                                        Prevent this Pop-up
                      </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById * ('root2')
    )
}
