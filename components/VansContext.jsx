import React from "react"

export default function VansContext() {
    return (
        <div className="vans--page--container">
            <img className="vans--page--image" src="./vans_page_image_last.png" alt="" />
            <div className="vans--page--subcontainer">
                <h2>Don't squeeze in a sedan when you could relac in a van.</h2>
                <p>Our mission is to enliven your road trip with the perfect travel van rental.
                    Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    <span className="block">(Hitch costs extra)</span>
                </p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className="bottom--box">
                    <h3>Your destination is waiting. 
                        <span className="block">Your van is ready.</span>
                    </h3>
                    <button className="explore--vans--btn">Explore our vans</button>
                </div>
            </div>
        </div>
    )
}