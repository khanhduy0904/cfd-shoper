import React from 'react'
import InputGroup from '../../../../../components/InputGroup'
import SelectGroup from '../../../../../components/SelectGroup'

export default function Step2({ formValidate, formSubmit }) {

    let { form, inputChange, error } = formValidate

    let yearNow = new Date().getFullYear()


    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6">
                    <InputGroup form={form} error={error} inputChange={inputChange} title="Card Number *" name="payment_card_number" />
                </div>
                <div className="col-12 col-md-6">
                    <InputGroup form={form} error={error} inputChange={inputChange} title="Name on Card" name="payment_card_name" />
                </div>
                <div className="col-12">
                    {/* Label */}
                    <label> Expiry Date * </label>
                </div>
                <div className="col-12 col-md-4">
                    <SelectGroup form={form} error={error} inputChange={inputChange} title="Month *" name="payment_card_month"
                        options={[...Array(12)].map((e, i) => i + 1)}
                    />
                </div>
                <div className="col-12 col-md-4">
                    <SelectGroup form={form} error={error} inputChange={inputChange} title="Year *" name="payment_card_year"
                        options={[...Array(100)].map((e, i) => yearNow + 50 - i)}
                    />

                </div>
                <div className="col-12 col-md-4">
                    <div className="form-group">
                        <div className="input-group input-group-merge">
                            <input className="form-control" id="paymentCardCVV" type="text" placeholder="CVV *" onChange={inputChange} value={form.payment_card_cvv} name="payment_card_cvv" />
                            <div className="input-group-append">
                                <span className="input-group-text" data-toggle="popover" data-placement="top" data-trigger="hover" data-content="" data-original-title title>
                                    <i className="fe fe-help-circle" />
                                </span>
                            </div>
                        </div>
                        {
                            error.payment_card_cvv && <p className="error-text">{error.payment_card_cvv}</p>
                        }
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="defaultPaymentMethod" onChange={inputChange} name="default" checked={form.default} />
                            <label className="custom-control-label" htmlFor="defaultPaymentMethod">Default payment method</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* Button */}
            <button className="btn btn-dark" type="submit" onClick={formSubmit}>
                Add Card
            </button>
        </>
    )
}
