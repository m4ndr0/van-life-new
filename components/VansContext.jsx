import React from "react"
import data from "../data"
import { Link } from "react-router-dom"


export default function VansContext() {

    const [vans, setVans] = React.useState(data)
    console.log(vans)

    const vanElements = vans.map(van =>(

        <div key={van.id} className="van--elements--container">
            <Link 
                className="link--to--vandetails" 
                to={`/Vans/${van.id}`}
                aria-label={`View details for ${van.name}, 
                            priced at $${van.price} per day`}
            >
            <img className="vans--elemets--img" alt={`Image of ${van.name}`} src={van.imageUrl} />
            <div className="vans--info">
                <h3>{van.name}</h3>
                <p>${van.price}<span className="block day--text">/day</span></p>
            </div>
            <p className={`van--type ${van.type} selected`}>{van.type}</p>
            </Link>
        </div>
    ))

    return (
        <div className="vans--page--container">
            <h1>Explore our van options</h1>
            <div className="vans--grid--container">
                {vanElements}
            </div>
        </div>
    )
}