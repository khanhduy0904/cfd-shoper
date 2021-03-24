import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormValidate from '../../../core/hook/useFormValidate';
import { loginAction } from '../../../redux/reducers/authReducer';


const styles = {
    inputError: {
        color: 'red',
        fontSize: 13,
        fontStyle: 'italic'
    }
}

function Login(props) {
    let {form, error, inputChange, submit} = useFormValidate({
        username: "",
        password: ""
    },{
        rule: {
            username: {
                required: true
            },
            password: {
                required: true
            }
        },
        message: {
            username: {
                required: "Username không được để trống"
            },
            password: {
                required: "Password không được để trống"
            }
        }
    }
    )
    
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const _btnLogin = () => {
        let error = submit();
        if(Object.keys(error).length === 0){
            // dispatch(userLogin());
            dispatch(loginAction(form));
        }
       
    }
    return (
        <div className="card-body">
            {/* Heading */}
            <h6 className="mb-7">Returning Customer</h6>
            {auth.error && <p className="error-notification" style={styles.inputError}>{auth.error}</p>}
            {/* Form */}
            <div className="row">
                <div className="col-12">
                    {/* Email */}
                    <div className="form-group">
                        <label className="sr-only" htmlFor="loginEmail">
                            Email Address *
                        </label>
                        <input className="form-control form-control-sm" id="loginEmail" type="text" name="username" placeholder="Email Address *" onChange={inputChange} value={form.username} />
                        {error.username && <p style={styles.inputError} className="text-error">{error.username}</p>}
                    </div>
                </div>
                <div className="col-12">
                    {/* Password */}
                    <div className="form-group">
                        <label className="sr-only" htmlFor="loginPassword">
                            Password *
                        </label>
                        <input className="form-control form-control-sm" id="loginPassword" type="password" name="password" placeholder="Password *" onChange={inputChange} value={form.password} />
                        {error.password && <p style={styles.inputError} className="text-error">{error.password}</p>}
                    </div>
                </div>
                <div className="col-12 col-md">
                    {/* Remember */}
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" id="loginRemember" type="checkbox" />
                            <label className="custom-control-label" htmlFor="loginRemember">
                                Remember me
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-auto">
                    {/* Link */}
                    <div className="form-group">
                        <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot Password?</a>
                    </div>
                </div>
                <div className="col-12">
                    {/* Button */}
                    <button className="btn btn-sm btn-dark" type="submit" onClick={_btnLogin}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;