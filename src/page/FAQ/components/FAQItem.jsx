import React, { useRef } from 'react';
import $ from 'jquery'


function FAQItem({ques, ans,number}) {
    let randomId = 'accoridon-' + Math.round(Math.random() * 1000000000)
    let thisRef = useRef()
    function toggle() {
        $(thisRef.current).find('.collapse').slideToggle()
    }
    return (
        <li className="list-group-item" ref={thisRef}>
            {/* Toggle */}
            <a className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset" data-toggle="collapse" href={`#${randomId}`} onClick={toggle}>
                {number}. {ques}
            </a>
            {/* Collapse */}
            <div className="collapse" id={randomId} data-parent={randomId}>
                <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">
                        {ans}
                    </p>
                </div>
            </div>
        </li>
    );
}

export default FAQItem;