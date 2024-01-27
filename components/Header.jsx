import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


export default function Header() {
    return (
        <>
            <header>
                <div>
                    <p>#VANLIFE</p>
                    <Link className='nav--link' to="/">Home</Link>
                    <Link className='nav--link' to="/Vans">Vans</Link>
                </div>
            </header>
        </>
    )
}