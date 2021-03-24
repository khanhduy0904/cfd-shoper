import React, { useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import userApi from '../../../../api/userApi';
import InputGroup from '../../../../components/InputGroup';
import useFormValidate from '../../../../core/hook/useFormValidate';

export default function Address() {
    let { form, error, submit, inputChange, setForm } = useFormValidate({
        first_name: '',
        last_name: '',
        email: '',
        company: '',
        country: '',
        address_line1: '',
        address_line2: '',
        city: '',
        postcode: '',
        phone: '',
        default: false
    
    }, {
        rule: {
            first_name: { required: true },
            last_name: { required: true },
            email: { pattern: 'email' },
            country: { required: true },
            address_line1: { required: true },
            city: { required: true },
            postcode: { required: true },
            phone: { pattern: 'phone' }
        }
    })
    let history = useHistory();
    let {_id} = useRouteMatch().params;
    useEffect(  () => {

        let fetchApi = async () => {
            if(_id){
                let address = await userApi.getAddress(_id);
                if(address.data){
                    setForm(address.data)
                }
            }
        }
        fetchApi()

      
    },[_id, setForm])

    async function _submit() {
        let error = submit()
        if (Object.keys(error).length === 0) {
            let res =  await userApi.addAddress(form);
            console.log(res)
            history.push("/account/address");
        }
    }

    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Heading */}
            <h6 className="mb-7">
                Add Address
            </h6>
            {/* Form */}
            <div className="row">
                <div className="col-12 col-md-6">
                    <InputGroup inputChange={inputChange} form={form} name="first_name" error={error} title="First Name *" />
                </div>
                <div className="col-12 col-md-6">
                    <InputGroup inputChange={inputChange} form={form} name="last_name" error={error} title="Last Name *" />

                </div>
                <div className="col-12">
                    <InputGroup inputChange={inputChange} form={form} name="email" error={error} title="Email Address *" />

                </div>
                <div className="col-12">
                    <InputGroup inputChange={inputChange} form={form} name="company" error={error} title="Company Name" />

                </div>
                <div className="col-12">
                    <InputGroup inputChange={inputChange} form={form} name="country" error={error} title="Country *" />

                </div>
                <div className="col-12">
                    <InputGroup inputChange={inputChange} form={form} name="address_line1" error={error} title="Address Line 1 *" />

                </div>
                <div className="col-12">
                    <InputGroup inputChange={inputChange} form={form} name="address_line2" error={error} title="Address Line 2" />

                </div>
                <div className="col-12 col-md-6">
                    <InputGroup inputChange={inputChange} form={form} name="city" error={error} title="Town / City *" />

                </div>
                <div className="col-12 col-md-6">
                    <InputGroup inputChange={inputChange} form={form} name="postcode" error={error} title="ZIP / Postcode *" />

                </div>
                <div className="col-12">
                    <InputGroup inputChange={inputChange} form={form} name="phone" error={error} title="Mobile Phone *" />
                </div>
                <div className="col-12">

                    <div className="form-group">
                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="defaultDeliveryAddress" checked={form.default} onChange={inputChange} name="default" />
                            <label className="custom-control-label" htmlFor="defaultDeliveryAddress">Default delivery address</label>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Button */}
            <button className="btn btn-dark" type="submit" onClick={_submit}>
                Add Address
                </button>
        </div>
    )
}
