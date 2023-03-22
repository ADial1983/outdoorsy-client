import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            {
                (localStorage.getItem("outdoorsy_user") !== null) ?
                <>
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("outdoorsy_user")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                navigate("/home")
                            }}
                        >Home</button>
                    </li>
                    </> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }
        </ul>
    )
}

