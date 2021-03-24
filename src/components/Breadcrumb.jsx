import React from 'react'
import { Link } from 'react-router-dom'

/*
Cấu trúc của list
list= [
    {
        title: string,
        link : string
    }
]
*/
export default function Breadcrumb({list}) {
    return (
        <nav className="my-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Breadcrumb */}
                        <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                            {
                                list.map((e,index) =>  <li key={index} className="breadcrumb-item">
                                <Link className="text-gray-400" to={e.link}>{e.title}</Link>
                            </li>)
                            }
                            {/* <li className="breadcrumb-item">
                                <a className="text-gray-400" href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">
                                About Us
                                </li> */}
                        </ol>
                    </div>
                </div>
            </div>
        </nav>
    )
}
