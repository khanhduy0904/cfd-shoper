import { useState } from "react";

let patternEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let patternURL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;
let patternPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

export default function useFormValidate(initialValue, rule, message) {
  let [value, setValue] = useState(initialValue);
  let [error, setError] = useState({});

  function inputChange(event) {
    setValue(event.target.value);
  }

  function submit() {
    let errorT;

    if (rule.required) {
      if (!value) {
        errorT = message?.required || "Trường này không được để trống";
        continue;
      }
    }

    if (rule.pattern) {
      let pattern = rule.pattern;
      if (pattern === "email") pattern = patternEmail;
      if (pattern === "phone") pattern = patternPhone;
      if (pattern === "url") pattern = patternURL;

      if (!pattern.test(value)) {
        errorT =
          message?.pattern || "Trường này không đúng định dạng yêu cầu";
      }
    }

    if (rule.min && value?.length < rule.min) {
      errorT = message?.min || `Trường này phải dài hơn ${rule.min} kí tự`;
    }

    if (rule.max && value?.length > rule.max) {
      errorT =
        message?.max || `Trường này không được dài hơn ${rule.max} kí tự`;
    }

   
    setError(errorT);
    return errorT;
  }

  return {
    input
  };
}
