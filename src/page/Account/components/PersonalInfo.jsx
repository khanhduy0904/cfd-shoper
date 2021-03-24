import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InputGroup from '../../../components/InputGroup'
import useFormValidate from '../../../core/hook/useFormValidate'
import { updateInfoAction } from '../../../redux/reducers/authReducer';

export default function PersonalInfo() {

    let auth = useSelector(state => state.auth);
    let {form, error, submit, inputChange} = useFormValidate({
        first_name: "",
        last_name: "",
        email: auth.user.email,
        current_password: "",
        new_password: ""

    },{
        rule: {
            first_name: {required: true},
            last_name: {required: true},
            email: {required: true, pattern: "email"},
            current_password: {min: 6},
            new_password:{required: true, match: "current_password"},
        },
        message: {

        }
    });

    let dispatch = useDispatch();
    let yearNow = new Date().getFullYear();

    const handleSubmit = () => {
        let error;
        if(form.current_password === ""){
            error = submit({exclude: {current_password: 1 ,new_password: 1}})
        }else{
            error = submit();
        }
        if(Object.keys(error).length === 0){
            dispatch(updateInfoAction(form))
            alert("thành công");
        }
    }

    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
     
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* First Name */}
                        <InputGroup form={form} name="first_name" title="First Name*" error={error} inputChange={inputChange}/>

                    </div>
                    <div className="col-12 col-md-6">
                     
                        <InputGroup form={form} name="last_name" title="Last Name" error={error} inputChange={inputChange}/>
                      
                    </div>
                    <div className="col-12">
                        {/* Email */}
                        <InputGroup disabled={true} form={form} name="email" title="Email *" error={error} inputChange={inputChange}/>
                        
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <InputGroup type="password" form={form} name="current_password" title="Current Password" error={error} inputChange={inputChange}/>
                       
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <InputGroup type="password" form={form} name="new_password" title="New Password" error={error} inputChange={inputChange}/>
                       
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Birthday */}
                        <div className="form-group">
                            {/* Label */}
                            <label>Date of Birth</label>
                            {/* Inputs */}
                            <div className="form-row">
                                <div className="col-auto">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountDate">
                                        Date
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountDate">
                                        {
                                            [...Array(31)].map((item, index) => <option value={index + 1} key={index}>{index + 1}</option>) 
                                        }
                                    </select>
                                </div>
                                <div className="col">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountMonth">
                                        Month
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountMonth">
                                        {
                                            [...Array(12)].map((item, index) => <option value={index + 1} key={index}>{index + 1}</option>) 
                                        }
                                    </select>
                                </div>
                                <div className="col-auto">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountYear">
                                        Year
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountYear">
                                        {
                                            [...Array(80)].map((item, index) => <option value={yearNow - index} key={index}>{yearNow - index}</option>) 
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Gender */}
                        <div className="form-group mb-8">
                            <label>Gender</label>
                            <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-sm btn-outline-border active">
                                    <input type="radio" name="gender" defaultChecked /> Male
                                </label>
                                <label className="btn btn-sm btn-outline-border">
                                    <input type="radio" name="gender" /> Female
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Button */}
                        <button className="btn btn-dark" type="submit" onClick={handleSubmit}>Save Changes</button>
                    </div>
                </div>
            
        </div>
    )
}
