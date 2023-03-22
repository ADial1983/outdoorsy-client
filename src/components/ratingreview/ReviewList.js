import { getReviews, getReviewsByTrail, deleteReview } from "../../managers/ReviewManager"
import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export const ReviewList = ({trailId}) => {
    const [ reviews, setReviews ] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllReviews()
    }, [])

    const getAllReviews = () => {
        getReviewsByTrail(trailId).then(data => setReviews(data))
    }

    const handleDelete = (id) => {
        deleteReview(id).then(() => {
            {getAllReviews()}
            }) 
    }
    return (
        <article className="reviews">
            {
                reviews.map(review => {
                    return <section key={`review--${review.id}`} className="trail">
                        <div className="review__content">{review.review}</div>
                        {
                            review.author ? (
                                <>
                                <button onClick={() => navigate(`/reviews/edit/${review.id}`)}>Edit</button>
                                <button onClick={() => handleDelete(review.id)}>Delete</button>
                                </>
                            ): ("")
                        }
                    </section>
                })
            }
        </article>
    )
}