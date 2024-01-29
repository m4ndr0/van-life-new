import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <div>
                        <Link className='logo' to="/">#VANLIFE</Link>
                    </div>
                    <Link className='nav--link' to="/About">About</Link>
                    <Link className='nav--link vans--link' to="/Vans">Vans</Link>
                </nav>
            </header>
        </>
    )
}