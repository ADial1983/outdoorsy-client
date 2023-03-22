import React, { useEffect, useState } from "react"
import { getTrails } from "../../managers/TrailManager.js"
import { useNavigate } from "react-router-dom"
import "./TrailList.css"

export const TrailList = (props) => {
    const [ trails, setTrails ] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getTrails().then(data => setTrails(data))
    }, [])

    return (
        <article className="trails">
            {
                trails.map(trail => {
                    return <section key={`trail--${trail.id}`} className="trail">
                        <div className="trail__name">{trail.name}</div>
                        <div className="trail__length">{trail.length} miles</div>
                        <div className="trail__description">{trail.description}</div>
                        <button onClick={() => navigate(`/trails/${trail.id}`)}>Trail Details</button>
                    </section>
                })
            }
        </article>
    )
}