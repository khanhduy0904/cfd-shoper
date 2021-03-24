
import React from 'react'

export default function Step1({ nextStep, formValidate }) {
    let { inputChange, form, error } = formValidate

    return (
        <>
            {/* Card */}
            <div className="form-group card card-sm border">
                <div className="card-body">
                    {/* Radio */}
                    <div className="custom-control custom-radio">
                        {/* Input */}
                        <input className="custom-control-input collapsed" id="checkoutPaymentCard" name="payment_option" value="credit_card" type="radio" onChange={inputChange} checked={form.payment_option === 'credit_card'} />
                        {/* Label */}
                        <label className="custom-control-label d-flex justify-content-between font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentCard">
                            I want to add Debit / Credit Card <img className="ml-2" src="/img/brands/color/cards.svg" alt="..." />
                        </label>
                    </div>
                </div>
            </div>
            {/* Card */}
            <div className="form-group card card-sm border">
                <div className="card-body">
                    {/* Radio */}
                    <div className="custom-control custom-radio">
                        {/* Input */}
                        <input className="custom-control-input" id="checkoutPaymentPaypal" name="payment_option" value="paypal" type="radio" onChange={inputChange} checked={form.payment_option === 'paypal'} />
                        {/* Label */}
                        <label className="custom-control-label d-flex justify-content-between font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentPaypal">
                            I want to add PayPall <img src="/img/brands/color/paypal.svg" alt="..." />
                        </label>
                    </div>
                </div>
            </div>
            {/* Button */}
            <button className="btn btn-dark" type="submit" onClick={nextStep}>
                Continue <i className="fe fe-arrow-right ml-2" />
            </button>
        </>
    )
}
