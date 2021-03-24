

import userApi from '../../../../api/userApi'
import useFormValidate from '../../../../core/hook/useFormValidate'
import React, { useState, useEffect } from 'react'
import { useHistory, useRouteMatch } from 'react-router'
import Step1 from './components/Step1'
import Step2 from './components/Step2'

export default function Payment() {


    let { _id} = useRouteMatch().params

    let [state, setState] = useState({
        errorMessage: '',
        successMessage: '',
        step: _id ? 2 : 1
    })
    let form = useFormValidate({
        _id,
        payment_option: 'credit_card',
        payment_card_number: '',
        payment_card_name: '',
        payment_card_month: '',
        payment_card_year: '',
        payment_card_cvv: '',
        default: false
    }, {
        rule: {
            payment_card_month: { required: true },
            payment_card_year: { required: true },
            payment_card_number: { required: true },
            payment_card_name: { required: true },
            payment_card_cvv: { required: true },
        }
    })

    useEffect( () => {
        let fetchApi = async () => {
            if (_id) {
                let result = await userApi.getPayment(_id)
    
                if (result.data) {
                    form.setForm(result.data)
                }
            }
        }
        fetchApi()
      
    }, [_id,form])


    let history = useHistory()


    




    function nextStep() {
        setState({
            ...state,
            step: state.step + 1
        })
    }

    function formSubmit() {
        let error = form.submit()
        setState({
            ...state,
            errorMessage: '',
            successMessage: ''
        })
        if (Object.keys(error).length === 0) {
            userApi.addPayment(form.form)
                .then(res => {
                    if (res.data) {
                        history.push('/account/payment')
                    } else {
                        setState({
                            ...state,
                            errorMessage: res.error
                        })
                    }
                })
        }
    }

    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Form */}

            {/* Heading */}
            <h6 className="mb-7"> Add Debit / Credit Card </h6>
            {
                state.errorMessage && <p className="error-text">{state.errorMessage}</p>
            }
            {
                state.successMessage && <p className="green-message">{state.successMessage}</p>
            }
            {
                state.step === 1 && <Step1 formValidate={form} nextStep={nextStep} />
            }
            {
                state.step === 2 && <Step2 formValidate={form} formSubmit={formSubmit} />
            }
        </div>
    )
}

