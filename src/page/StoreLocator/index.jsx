import storeApi from '../../api/storeApi'
import React, { useEffect, useState } from 'react'
import StoreItem from './components/StoreItem'

export default function StoreLocator() {


    let [list, setList] = useState([])

    useEffect(() => {
        storeApi.get()
            .then(res => {
                setList(res.data)
            })
    }, [])

    let [iframeSrc, setIframeSrc] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3193843173494!2d106.6852965152604!3d10.786832161950072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2d82dfb88f%3A0xc332735006743f3b!2zMjU4IE5hbSBL4buzIEto4bufaSBOZ2jEqWEsIFBoxrDhu51uZyA4LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1614421052633!5m2!1svi!2s')

    function storeClick(i) {
        setIframeSrc(list[i].iframe_google_map)
    }



    return (
        <>
            {/* HEADER */}
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                            {/* Heading */}
                            <h3 className="mb-10 text-center">Store Locator</h3>
                            {/* Search */}
                            <div className="input-group input-group-merge">
                                <input className="form-control" type="search" placeholder="Enter Country or City" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-border" type="submit">
                                        <i className="fe fe-search" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* MAP */}
            <section className="py-12 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-4">
                            {/* Card */}
                            <div className="card card-xl h-md-0 minh-md-100 mb-10 mb-md-0 " style={{ overflow: 'auto' }}>
                                {
                                    list.map((e, i) => <StoreItem onClick={storeClick.bind(null, i)} key={i} {...e} />)
                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-8">
                            {/* Map */}
                            <div className="embed-responsive embed-responsive-4by3">
                                <iframe src={iframeSrc} allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

