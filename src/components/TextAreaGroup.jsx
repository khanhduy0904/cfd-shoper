import React from 'react';

export default function TextAreaGroup({ form, name, title, type = "text", placeholder, inputChange, error, disabled }) {
    if (!placeholder) placeholder = title

    let randomID = 'id-' + (Math.round(Math.random() * 100000))

    return (
        <div className="form-group">
            <label htmlFor={randomID}>{title}</label>
            <textarea disabled={disabled} rows={5} className="form-control form-control-sm" id={randomID} name={name} type={type} placeholder={placeholder} value={form[name]} onChange={inputChange} />
            {
                error[name] && <p className="error-text">{error[name]}</p>
            }
        </div>
    )
}