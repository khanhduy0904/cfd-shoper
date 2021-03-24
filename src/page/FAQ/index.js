import React, { useEffect, useState } from 'react'
import faqApi from "../../api/faqApi";
import FAQGroup from './components/FAQGroup';
export default function FAQ() {

    let [list, setList] = useState([]);
    useEffect(() => {
        faqApi.get().then(res => {
            setList(res);
        })
    },[])

    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 col-xl-8">
                        {/* Heading */}
                        <h3 className="mb-10 text-center">Frequently Asked Questionss</h3>
                        {/* Heading */}
                        {
                            list.map((e, i) => <FAQGroup key={i} {...e} />)
                        }
                       
                    </div>
                </div>
            </div>
        </section>
    )
}
