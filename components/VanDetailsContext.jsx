import { useParams, Link } from "react-router-dom"
import React from "react"
import data from "../data"

export default function VanDetailsContext() {
    const params = useParams()
    let selectedVanObj

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === params.id) {
            selectedVanObj = data[i]
        }
    }

    return (
            <div className="van--details--page--global--container">
                <div className="van--details--page--container">
                    <div className="van--details--page">
                        <Link className="link--back--to--vans" to="/Vans">Back to all vans</Link>
                        <img className="van--details--page--image" src={selectedVanObj.imageUrl}/>
                        <p className={`van--type ${selectedVanObj.type}`}>{selectedVanObj.type}</p>
                        <div className="van--details--page--description--container">
                            <h1 className="van--details--page--name">{selectedVanObj.name}</h1>
                            <p className="van--details--page--price">{`$${selectedVanObj.price}/day`}</p>
                            <p className="van--details--page--description">{selectedVanObj.description}</p>
                        </div>
                        <button className="rent--van--button">Rent this van</button>
                    </div>
                </div>
            </div>
    )
}