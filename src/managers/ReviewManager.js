export const getReviews = () => {
    return fetch("http://localhost:8000/reviews", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("outdoorsy_user")}`
        }
    })
        .then(response => response.json())
}

export const getReviewsByTrail = (trailId) => {
    return fetch(`http://localhost:8000/reviews?trail=${trailId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("outdoorsy_user")}`
        }
    })
        .then(response => response.json())
}

export const getReviewById = (id) => {
    return fetch(`http://localhost:8000/reviews/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("outdoorsy_user")}`
        }
    })
        .then(response => response.json())
}

export const newRating = (rating) => {
    return fetch("http://localhost:8000/ratings", {
        method: "POST", 
        headers:{
            "Authorization": `Token ${localStorage.getItem("outdoorsy_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            trail: rating.trail,
            parking: rating.parking,
            bathroom: rating.bathroom,
            width: rating.width,
            clear: rating.clear,
            steep: rating.steep
        })
    })
    .then(response => response.json())
}

export const getRatingsByTrail = (trailId) => {
    return fetch(`http://localhost:8000/ratings?trail=${trailId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("outdoorsy_user")}`
        }
    })
        .then(response => response.json())
}

export const updateRating = (id, rating) => {
    return fetch(`http://localhost:8000/ratings/${id}`, {
        method: "PUT", 
        headers:{
            "Authorization": `Token ${localStorage.getItem("outdoorsy_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            trail: rating.trail,
            parking: rating.parking,
            bathroom: rating.bathroom,
            width: rating.width,
            clear: rating.clear,
            steep: rating.steep
        })
    })
    .then(response => response.json())
}

export const newReview = (review) => {
    return fetch("http://localhost:8000/reviews", {
        method: "POST", 
        headers:{
            "Authorization": `Token ${localStorage.getItem("outdoorsy_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            trail: review.trail,
            review: review.review
        })
    })
    .then(response => response.json())
}

export const updateReview = (id, review) => {
    return fetch(`http://localhost:8000/reviews/${id}`, {
        method: "PUT", 
        headers:{
            "Authorization": `Token ${localStorage.getItem("outdoorsy_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            trail: review.trail,
            review: review.review
        })
    })
    .then(response => response.json())
}

export const deleteReview = (id) => {
    return fetch(`http://localhost:8000/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Token ${localStorage.getItem("outdoorsy_user")}`
      },
    })
  }

export const newRatingReview = (ratingreview) => {
    return fetch("http://localhost:8000/ratingreviews", {
        method: "POST", 
        headers:{
            "Authorization": `Token ${localStorage.getItem("outdoorsy_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            rating: ratingreview.rating,
            review: ratingreview.review
        })
    })
    .then(response => response.json())
}