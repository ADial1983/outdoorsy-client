import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getSingleTrail } from "../../managers/TrailManager" 
import { ReviewList } from "../ratingreview/ReviewList"
import "./TrailDetails.css"

export const TrailDetails = () => {
    const navigate = useNavigate()
    const { trailId } = useParams()

    const [currentTrail, setCurrentTrail] = useState({
        id: 0,
        name: "",
        description: "",
        length: ""
    })

    useEffect(() => {
        getSingleTrail(trailId)
            .then((singleTrail) => {
                setCurrentTrail(singleTrail)
            })
    }, [])


return (
    <>
        <article className="trail-details">
                    
            <section key={`trail--${currentTrail.id}`} className="trail">
                <div className="trail__name">{currentTrail.name}</div>
                <div className="trail__length">{currentTrail.length} Miles</div>
                <div className="trail__description">{currentTrail.description}</div>
                        
                <div className="trail__reviews">Reviews</div>
                <button onClick={() => navigate(`/reviews/new/${trailId}`)}>Rate and Review</button>
                <section className="review_list">
                    <ReviewList trailId={trailId}/>
                </section>      
            </section>
            
        </article>
    </>
)
}