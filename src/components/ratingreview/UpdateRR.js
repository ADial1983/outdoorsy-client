import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { newRating, newReview, newRatingReview, getReviewById, updateRating, updateReview } from "../../managers/ReviewManager"

export const RatingReviewUpdate = () => {
    const navigate = useNavigate()
    const { reviewId } = useParams()

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentReview, setCurrentReview] = useState({
        id: 0,
        user: "",
        review: "",
        trail: 0
    })
    

    useEffect(() => {
        getReviewById(reviewId).then((data) => setCurrentReview(data))},[reviewId])
    

    const changeReviewState = (domEvent) => {
        // TODO: Complete the onChange function
        const copy = {...currentReview}
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentReview(copy)
    }



    return (
        <form className="RatingForm">
            <h2 className="RatingForm__title">Rate and Review</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Write a review</label>
                    <input type="text" name="review" required autoFocus className="form-control"
                        defaultValue={currentReview.review}
                        onChange={changeReviewState}
                    />               
                </div>
            </fieldset>
            <button type="submit"
                onClick={event => {
                    event.preventDefault()
                    
                        updateReview(currentReview.id, currentReview).then(
                            navigate(`/trails/${currentReview.trail}`)
                        )

                    .catch(error => console.error (error))
                }}
                >Submit</button>
        </form>
    )
}