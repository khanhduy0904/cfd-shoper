import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userApi from "../../../../api/userApi";

export default function AddressItem(props) {

    let [state, setState] = useState(false);
    let { address_line1, address_line2, city, country, first_name, last_name, phone, _id, setDefaultAddress } = props
    const _remove = () => {
        userApi.removeAddress(_id);
        setState(true);
    }
    if (state) return null;

    return (
        <div className="col-12 col-lg-6" >
            <div className="card card-lg bg-light mb-8">
                <div className={`card-body profile-address ${props.default ? "profile-default" : ""}`}>
                    <p className="item_default" onClick={setDefaultAddress} >default</p>
                    {/* Heading */}
                    <h6 className="mb-6">
                        {first_name + " " + last_name}
                    </h6>
                    {/* Text */}
                    <p className="text-muted mb-0">
                        {address_line1}{address_line2} <br />
                        {city} - {country} <br />
                        {phone} <br />
                    </p>
                    {/* Action */}
                    <div className="card-action card-action-right">
                        {/* Button */}
                        <Link className="btn btn-xs btn-circle btn-white-primary" to={`/account/address/edit/${_id}`}>
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
