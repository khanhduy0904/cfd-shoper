import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputGroup from '../../../components/InputGroup';
import useFormValidate from '../../../core/hook/useFormValidate';
import { loginAction, registerAction } from '../../../redux/reducers/authReducer';

function Register(props) {


    let { form, error, inputChange, submit } = useFormValidate({
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        confirm_password: "",
    }, {
        rule: {
            first_name: {
                required: true
            },
            last_name: {
                required: true
            },
            username: {
                required: true,
                pattern: "email"
            },
            password: {
                required: true,
                min: 6,
                max: 32
            },
            confirm_password: {
                required: true,
                match: "password"
            }
        },
        message: {
            first_name: {
                required: "Họ không được để trống"
            },
            last_name: {
                required: "Tên không được để trống"
            },
            username: {
                required: "Username không được để trống",
                pattern: "Email không đúng định dạng"
            },
            confirm_password: {
                required: "Vui lòng xác nhận mật khẩu",
                match: "Password và confirm password phải nhập giống nhau"
            },

        }
    },{  className: "form-register" }
    )

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const _btnRegister = () => {
        let error = submit();
        if (Object.keys(error).length === 0) {
            // dispatch(userLogin());
            dispatch(registerAction(form));
            alert("thành công")
        }

    }
    return (
        <div className="card-body form-register">
            {/* Heading */}
            <h6 className="mb-7">New Customer</h6>
            {/* Form */}
                <div className="row">
                    <div className="col-12">
                        {/*first_name */}
                        <InputGroup name="first_name" title="First Name*" form={form} inputChange={inputChange} error={error}/>
                    </div>
                    <div className="col-12">
                        {/*last_name */}
                        <InputGroup name="last_name" title="Last Name*" form={form} inputChange={inputChange} error={error}/>
                    </div>
                    <div className="col-12">
                        {/* Email */}
                        <InputGroup name="username" title="Email*" form={form} inputChange={inputChange} error={error}/>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <InputGroup name="password" type="password" title="Password*" form={form} inputChange={inputChange} error={error}/>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Confirm Password */}
                        <InputGroup name="confirm_password" type="password" title="Confirm Password*" form={form} inputChange={inputChange} error={error}/>
                    </div>
                    <div className="col-12 col-md-auto">
                        {/* Link */}
                        <div className="form-group font-size-sm text-muted">
                            By registering your details, you agree with our Terms &amp; Conditions,
                            and Privacy and Cookie Policy.
                    </div>
                    </div>
                    <div className="col-12 col-md">
                        {/* Newsletter */}
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                                <label className="custom-control-label" htmlFor="registerNewsletter">
                                    Sign me up for the Newsletter!
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Button */}
                        <button className="btn btn-sm btn-dark" type="submit" onClick={_btnRegister}>
                            Register
                    </button>
                    </div>
                </div>  
        </div>
    );
}

export default Register;