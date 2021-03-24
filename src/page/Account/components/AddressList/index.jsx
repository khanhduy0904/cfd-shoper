import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import userApi from '../../../../api/userApi';
import AddressItem from './AddressItem'

export default function AddressList() {

    let [list, setList] = useState([]);

    useEffect(() => {
        let fetchApi = async () => {
            let res = await userApi.getAddress();
            setList(res.data);
        }
        fetchApi();
    },[])

    let match = useRouteMatch();

    const setDefaultAddress = (e) => {
        if(!e.default){
            userApi.changeAddressDefault({
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
                {
                    list.map(e => (
                             <AddressItem key={e._id} {...e} setDefaultAddress={setDefaultAddress.bind(null, e)}/> 
                    ))
                }

                <div className="col-12">
                    {/* Button */}
                    <Link className="btn btn-block btn-lg btn-outline-border" to={`${match.path}/create`}>
                        Add Address <i className="fe fe-plus" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
