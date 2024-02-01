import React from "react"
import {Link} from "react-router-dom"


export default function HomeContext() {
    return (
        <main>
            <div className="home--page--container">
                <div className="home--element--container">
                    <h1>You got the travel plans, we got the travel vans.</h1> 
                    <p>Add adventure to your life by joining the #vanlife movement. 
                        <span className="block">Rent the perfect van to make your perfect road trip.</span>
                    </p>
                    <Link to="/Vans"><button className="find--your--van--btn">Find your van</button></Link>
                </div>               
            </div>
        </main>
    )
}