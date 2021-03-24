import React from 'react'
import { Link } from 'react-router-dom'
import TopNav from './TopNav'
import MainNav from './MainNav'
import BottomNav from './BottomNav'


export default function Header() {
    return (
        <>
            <TopNav />
            {/* NAVBAR */}
            <MainNav />
            {/* NAVBAR */}

            <BottomNav />
        </>
    )
}


// redux-thunk
// redux-toolkit
// redux-saga