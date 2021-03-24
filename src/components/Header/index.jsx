import React from 'react'
import BottomNav from './BottomNav'
import MainNav from './MainNav'
import TopNav from './TopNav'



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