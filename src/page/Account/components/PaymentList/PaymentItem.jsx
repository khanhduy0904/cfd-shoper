import React, { useState } from 'react'
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import userApi from '../../../../api/userApi';

export default function PaymentItem(props) {
    let [state, setState] = useState(false);
    let { payment_card_number, payment_card_month, payment_card_name, payment_card_year, payment_card_cvv, payment_option, _id, setDefaultPayment } = props;
    let match = useRouteMatch();
    const _remove = () => {
        userApi.removePayment(_id);
        setState(true);
    }
    if (state) return null;

    return (
        <div className="col-12 col-lg-6">
            <div className={`profile-payment card card-lg bg-light mb-8 ${props.default ? "profile-default" : ""}`}>
                <p className="item_default" onClick={setDefaultPayment} >default</p>
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-6">
                        {payment_option === "credit_card" ? "Debit / Credit Card" : "Paypal"}
                    </h6>
                    {/* Text */}
                    <p className="mb-5">
                        <strong>Card Number:</strong> <br />
                        <span className="text-muted">{payment_card_number}</span>
                    </p>
                    {/* Text */}
                    <p className="mb-5">
                        <strong>Expiry Date:</strong> <br />
                        <span className="text-muted">{payment_card_month}/{payment_card_year}</span>
                    </p>
                    {/* Text */}
                    <p className="mb-0">
                        <strong>Name on Card:</strong> <br />
                        <span className="text-muted">{payment_card_name}</span>
                    </p>
                    {/* Action */}
                    <div className="card-action card-action-right">
                        {/* Button */}
                        <Link className="btn btn-xs btn-circle btn-white-primary" to={`${match.path}/edit/${_id}`}>
                            <i className="fe fe-edit-2" />
                        </Link>
                        {/* Button */}

                        {
                            !props.default && <button className="btn btn-xs btn-circle btn-white-primary ml-2" onClick={_remove}>
                            <i className="fe fe-x" />
                        </button>
                        }    

                        {/* <button className="btn btn-xs btn-circle btn-white-primary" onClick={_remove}>
                            <i className="fe fe-x" />
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
