import { useState } from "react";

let patternEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// let patternURL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g
let patternPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
let patternURL = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;


export default function useFormValidate(initialValue, validate, optionClassName = {}) {
    let [form, setForm] = useState(initialValue)

    let {className} = optionClassName;

    function getElement(){
        return className ? document.querySelector(`.${className}`) : document;
    }

    function inputChange(event) {

        let name = event.target.getAttribute('name')

        let input = getElement().querySelector(`[name="${name}"]`);

        let value = event.target.value;
        if (input.type === 'checkbox') {
            value = !form[name]
        }

        if (input.type === 'radio') {
            value = getElement().querySelector(`[name="${name}"]:checked`).value
        }

        setForm({
            ...form,
            [name]: value
        })
    }
    let [error, setError] = useState({})

    function submit(options = { exclude: {} }) {
        let { exclude } = options;
        if (typeof exclude === 'undefined') exclude = {}

        getElement().querySelectorAll('.error-input').forEach(e => e.classList.remove('error-input'))
        let { rule, message } = validate;


        let errorObject = {}


        for (let i in rule) {
            let r = rule[i];


            if (i in exclude) continue;
            if (r.required) {
                if (!form[i]) {
                    errorObject[i] = message?.[i]?.required || 'Trường này không được để trống'
                    continue
                }
            }

            if (r.pattern) {

                let pattern = r.pattern
                if (pattern === 'email') pattern = patternEmail
                if (pattern === 'phone') pattern = patternPhone
                if (pattern === 'url') pattern = patternURL

                if (!pattern.test(form[i])) {

                    errorObject[i] = message?.[i]?.pattern || 'Trường này không đúng định dạng yêu cầu'
                }
            }

            // check min max rule
            if (r.min && form[i]?.length < r.min) {
                errorObject[i] = message?.[i]?.min || `Trường này phải dài hơn ${r.min} kí tự`
            }

            if (r.max && form[i]?.length > r.max) {
                errorObject[i] = message?.[i]?.max || `Trường này không được dài hơn ${r.max} kí tự`
            }
            // check password rule
            if(r.match && form[r.match]){
                if(form[r.match] !== form[i]){
                    errorObject[i] = message?.[i]?.match || `Vui lòng điền giống ${r.match}`
                }
            }

            
        }

        for (let i in errorObject) {
            let input = getElement().querySelector(`[name="${i}"]`);
            if (input) {
                input.classList.add('error-input')
            }
        }
        setError(errorObject);
        return errorObject
    }


    return {
        form,
        inputChange,
        error,
        submit,
        setForm
    }
}


