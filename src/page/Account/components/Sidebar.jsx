import React from 'react'
import { useDispatch } from 'react-redux';
import {NavLink, useRouteMatch } from 'react-router-dom'
import { userLogout } from '../../../redux/reducers/authReducer';

export default function Sidebar() {
    let match = useRouteMatch();

    let dispatch = useDispatch(); 
    const btnLogout = (e) => {
        e.preventDefault();
        dispatch(userLogout());
    }

    return (
        <div className="col-12 col-md-3">
            {/* Nav */}
            <nav className="mb-10 mb-md-0">
                <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                    <NavLink className="list-group-item list-group-item-action dropright-toggle" to={`${match.path}/order`}>
                        Orders
                  </NavLink>
                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${match.path}/wishlist`}>
                        Wishlist
                  </NavLink>
                    <NavLink className="list-group-item list-group-item-action dropright-toggle " exact to={`${match.path}`}>
                        Personal Info
                  </NavLink>
                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${match.path}/address`}>
                        Addresses
                  </NavLink>
                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${match.path}/payment`}>
                        Payment Methods
                  </NavLink>
                    <NavLink className="list-group-item list-group-item-action dropright-toggle" to={`${match.path}/logout`} onClick={btnLogout}>
                        Logout
                  </NavLink>
                </div>
            </nav>
        </div>
    )
}
