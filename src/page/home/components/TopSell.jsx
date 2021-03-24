import React, { useEffect, useState } from 'react'
import productApi from '../../../api/productApi'
import withPriceFormat from '../../../hoc/withPriceFormat'
import Product from '../../Catalog/components/Product'

export default function TopSell() {


    let [product, setProduct] = useState([])

    useEffect(() => {
        let fetchApi = async () => {
            return fetch(`https://cfd-reactjs.herokuapp.com/product?sort=discount_rate.-1&categories=4221`).then(res => res.json())
            .then(res => {
                // console.log(res.data);
                setProduct(res.data)
            })  

        }
        fetchApi()

        /////
        // async function fetchApi() {
        //     let [mic, phone, laptop] = await Promise.all([
        //       pageApi.courseDetail(routerMath.params.slug),
        //       courseApi.related(routerMath.params.slug),
        //     ]);
        //     if (course.data) {
        //       console.log(course.data);
        //       setState({ course: course.data, courseRelated: courseRedlated.data });
        //     }
        //   }
        //   fetchApi();
    },[])

    return (
        <section className="py-12">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                        {/* Heading */}
                        <h2 className="mb-4 text-center">Top month Sale</h2>
                        {/* Nav */}
                        <div className="nav justify-content-center mb-10">
                            <a className="nav-link active" href="#topSellersTab" data-toggle="tab">Micro</a>
                            {/* <a className="nav-link" href="#topSellersTab" data-toggle="tab">Men</a>
                            <a className="nav-link" href="#topSellersTab" data-toggle="tab">Kids</a> */}
                        </div>
                    </div>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="topSellersTab">
                        <div className="row">
                            
                            {product.map((item) => (
                                <div className="col-6 col-md-4" key={item._id}>
                                    {withPriceFormat(Product, { ...item })}
                                  
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* Link  */}
                        <div className="mt-7 text-center">
                            <a className="link-underline" href="#!">Discover more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
