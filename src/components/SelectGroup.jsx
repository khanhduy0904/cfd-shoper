import { useState } from "react"

export default function SelectGroup({ form, name, title, type = "text", placeholder, inputChange, error, className, disabled, options = [] }) {
    if (!placeholder) placeholder = title
    let [randomID, setRandomID] = useState('id-' + (Math.round(Math.random() * 100000)))

    className = className ? `form-group ${className}` : 'form-group'

    return (
        <div className={className}>
            <select disabled={disabled} className="form-control form-control-sm" id={randomID} name={name} type={type} placeholder={placeholder} value={form[name]} onChange={inputChange}>
                <option value="">{title}</option>
                {
                    options.map((e) => <option value={e?.value || e?.[0] || e}>{e?.title || e?.[1] || e}</option>)
                }
            </select>
            {
                error[name] && <p className="error-text">{error[name]}</p>
            }
        </div>
    )
}