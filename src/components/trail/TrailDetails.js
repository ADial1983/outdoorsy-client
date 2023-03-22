import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getSingleTrail } from "../../managers/TrailManager" 
import { ReviewList } from "../ratingreview/ReviewList"
import { getRatingsByTrail } from "../../managers/ReviewManager"
import "./TrailDetails.css"

export const TrailDetails = () => {
    const navigate = useNavigate()
    const [ ratings, setRatings ] = useState([])
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

    getRatingsByTrail(trailId).then(data => setRatings(data))

    const averageBathroom = (ratings.reduce((sum, rating) => sum + rating.bathroom, 0) / ratings.length).toFixed(1)
    const averageParking = (ratings.reduce((sum, rating) => sum + rating.parking, 0) / ratings.length).toFixed(1)
    const averageWidth = (ratings.reduce((sum, rating) => sum + rating.width, 0) / ratings.length).toFixed(1)
    const averageClear = (ratings.reduce((sum, rating) => sum + rating.clear, 0) / ratings.length).toFixed(1)
    const averageSteep = (ratings.reduce((sum, rating) => sum + rating.steep, 0) / ratings.length).toFixed(1)

return (
    <>
        <article className="trail-details">
                    
            <section key={`trail--${currentTrail.id}`} className="trail">
                <div className="trail__name">{currentTrail.name}</div>
                <div className="trail__length">{currentTrail.length} Miles</div>
                <div className="trail__description">{currentTrail.description}</div>
                <section className="trail__ratings">
                    <div className="trail__bathrooms">Bathrooms: {averageBathroom}/5</div>
                    <div className="trail__parking">Parking: {averageParking}/5</div>
                    <div className="trail__width">Width: {averageWidth}/5</div>
                    <div className="trail__clear">Clear: {averageClear}/5</div>
                    <div className="trail__steep">Slope: {averageSteep}/5</div>
                </section>
                    
                        
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