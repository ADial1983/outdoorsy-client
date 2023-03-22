export const getTrails = () => {
    return fetch("http://localhost:8000/trails", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("outdoorsy_user")}`
        }
    })
        .then(response => response.json())
}

export const getSingleTrail = (trailId) => {
    return fetch(`http://localhost:8000/trails/${trailId}`, {
        headers: {
            "Authorization":`Token ${localStorage.getItem("outdoorsy_user")}`
        }
    }).then(response => response.json())
}