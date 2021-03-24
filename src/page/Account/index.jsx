import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Order from './components/Order'
import PersonalInfo from './components/PersonalInfo'
import Wishlist from './components/WishList'
import AddressList from './components/AddressList'
import Address from './components/Address'
import PaymentList from './components/PaymentList'
import Sidebar from './components/Sidebar'
import OrderList from './components/OrderList'
import Payment from './components/Payment'
import { useSelector } from 'react-redux'

export default function Account() {
    let match = useRouteMatch();
    console.log(match);
    let userAccount = useSelector(state => state.auth);
    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* Heading */}
                        <h3 className="mb-10">My Account</h3>
                    </div>
                </div>
                <div className="row">
                    <Sidebar />
                    <Switch>
                        <Route path={`${match.path}/order`} exact component={OrderList} />
                        <Route path={`${match.path}/order/:_id`} component={Order} />
                        <Route path={`${match.path}/wishlist`} component={Wishlist} />
                        <Route path={`${match.path}/address`} exact component={AddressList} />
                        <Route path={`${match.path}/address/:action/:_id?`} component={Address} />
                        <Route path={`${match.path}/payment`} exact component={PaymentList} />
                        <Route path={`${match.path}/payment/:action/:_id?`} component={Payment} />
                        <Route path={`${match.path}`} exact component={PersonalInfo} />
                    </Switch>
                </div>
            </div>
        </section>
    )
}
