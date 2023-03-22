import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { newRating, newReview, newRatingReview } from "../../managers/ReviewManager"

export const RatingReviewForm = () => {
    const navigate = useNavigate()
    const { trailId } = useParams()

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentReview, setCurrentReview] = useState({
        user: "",
        review: "",
        trail: trailId
    })
    
    const [currentRating, setCurrentRating] = useState({
        user: "",
        trail: trailId,
        parking: 0,
        bathroom: 0,
        width: 0,
        clear: 0,
        steep: 0
    })
    

    const changeReviewState = (domEvent) => {
        // TODO: Complete the onChange function
        const copy = {...currentReview}
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentReview(copy)
    }

    const changeRatingState = (domEvent) => {
        // TODO: Complete the onChange function
        const copy = {...currentRating}
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentRating(copy)
    }

    return (
        <form className="RatingForm">
            <h2 className="RatingForm__title">Rate and Review</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Write a review</label>
                    <input type="text" name="review" required autoFocus className="form-control"
                        value={currentReview.review}
                        onChange={changeReviewState}
                    />               
                    <label className="rating">How accessible are the bathrooms to you?</label>
                        <select
                                name="bathroom"
                                className="form-control"
                                value={currentRating.bathroom}
                                onChange={changeRatingState}>
                                <option value="0">Please Select One</option>
                                <option key={`bathroom--1`} value="1">1: Bathrooms are not accessible</option>
                                <option key={`bathroom--2`} value="2">2</option>
                                <option key={`bathroom--3`} value="3">3: Bathrooms are somewhat accessible</option>
                                <option key={`bathroom--4`} value="4">4</option>
                                <option key={`bathroom--5`} value="5">5: Bathrooms are very accessible</option>
                        </select>
                    <label className="rating">How accessible is the parking lot to you?</label>
                        <select
                                name="parking"
                                className="form-control"
                                value={currentRating.parking}
                                onChange={changeRatingState}>
                                <option value="0">Please Select One</option>
                                <option key={`parking--1`} value="1">1: Parking is not accessible</option>
                                <option key={`parking--2`} value="2">2</option>
                                <option key={`parking--3`} value="3">3: Parking is somewhat accessible</option>
                                <option key={`parking--4`} value="4">4</option>
                                <option key={`parking--5`} value="5">5: Parking is very accessible</option>
                        </select>
                    <label className="rating">Is the path wide enough?</label>
                        <select
                                name="width"
                                className="form-control"
                                value={currentRating.width}
                                onChange={changeRatingState}>
                                <option value="0">Please Select One</option>
                                <option key={`width--1`} value="1">1: Path is too narrow/ lacks space for bikers and hikers with mobility aids</option>
                                <option key={`width--2`} value="2">2</option>
                                <option key={`width--3`} value="3">3: Path is wide enough for some hikers</option>
                                <option key={`width--4`} value="4">4</option>
                                <option key={`width--5`} value="5">5: Path is wide enough for hikers to pass one another safely</option>
                        </select>
                    <label className="rating">Is the surface of the path smooth and free of obstructions?</label>
                        <select
                                name="clear"
                                className="form-control"
                                value={currentRating.clear}
                                onChange={changeRatingState}>
                                <option value="0">Please Select One</option>
                                <option key={`clear--1`} value="1">1: Path is uneven and/or has many obstructions</option>
                                <option key={`clear--2`} value="2">2</option>
                                <option key={`clear--3`} value="3">3: Path has some obstructions</option>
                                <option key={`clear--4`} value="4">4</option>
                                <option key={`clear--5`} value="5">5: Path is smooth with no obstructions</option>
                        </select>
                    <label className="rating">Are there any steep portions?</label>
                        <select
                                name="steep"
                                className="form-control"
                                value={currentRating.steep}
                                onChange={changeRatingState}>
                                <option value="0">Please Select One</option>
                                <option key={`steep--1`} value="1">1: Path is very steep</option>
                                <option key={`steep--2`} value="2">2</option>
                                <option key={`steep--3`} value="3">3: Path is moderately steep</option>
                                <option key={`steep--4`} value="4">4</option>
                                <option key={`steep--5`} value="5">5: Path is flat</option>
                        </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={event => {
                    event.preventDefault()
                    newRating(currentRating)
                    .then((ratingresponse) => {
                        if (currentReview.review !== "") {
                            newReview(currentReview).then((reviewresponse) => {
                                newRatingReview({
                                    rating: ratingresponse.id,
                                    review: reviewresponse.id
                                })
                            })
                        }
                    }).then(navigate(`/trails/${trailId}`))
                    .catch(error => console.error (error))
                }}
                >Submit</button>
        </form>
    )
}