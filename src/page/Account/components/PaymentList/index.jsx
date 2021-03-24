import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import userApi from '../../../../api/userApi';
import PaymentItem from './PaymentItem'

export default function PaymentList() {
    let [list, setList] = useState([]);

    useEffect(() => {
        let fetchApi = async () => {
            let res = await userApi.getPayment();
            setList(res.data);
        }
        fetchApi();
    },[])

    let match = useRouteMatch();

    const setDefaultPayment = (e) => {
        if(!e.default){
            userApi.changePaymentDefault({
                _id: e._id
            })

            list.forEach(item => {
                if(item._id === e._id ){
                    item.default = true
                }else{
                    item.default = false
                }
            })

            setList([...list])
        }
    }
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <div className="row">
                {list.map(e => (
                     <PaymentItem {...e} key={e._id} setDefaultPayment={setDefaultPayment.bind(null, e)}/>
                ))}
                <div className="col-12">
                    {/* Button */}
                    <Link className="btn btn-block btn-lg btn-outline-border" to={`${match.path}/create`}>
                        Add Payment Method <i className="fe fe-plus" />
                    </Link>
                </div>
            </div>
        </div>
    )
}


