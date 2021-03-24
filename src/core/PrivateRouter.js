import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRouter(props) {
    const auth = useSelector(state => state.auth);
    if(auth.login) return <Route {...props}/>

    return <Redirect to="/auth"/>
}
