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