import { getReviews, getReviewsByTrail } from "../../managers/ReviewManager"
import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export const ReviewList = ({trailId}) => {
    const [ reviews, setReviews ] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getReviewsByTrail(trailId).then(data => setReviews(data))
    }, [])

    return (
        <article className="reviews">
            {
                reviews.map(review => {
                    return <section key={`review--${review.id}`} className="trail">
                        <div className="review__content">{review.review}</div>
                    </section>
                })
            }
        </article>
    )
}