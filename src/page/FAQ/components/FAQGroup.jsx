import React from 'react';
import FAQItem from './FAQItem';

function FAQGroup({title, items}) {
    return (
        <>
            <h5 className="mb-7">{title}:</h5>
            <ul className="list-group list-group-flush-x mb-9" id="faqCollapseParentOne">
                {
                    items.map((e, i) => <FAQItem key={i} {...e} number={i + 1} />)
                }
            </ul>
        </>
    );
}

export default FAQGroup;