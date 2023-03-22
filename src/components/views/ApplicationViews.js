import { Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "../auth/Login" 
import { Register } from "../auth/Register"
import { NavBar } from "../nav/NavBar"
import { TrailList } from "../trail/TrailList"
import { TrailDetails } from "../trail/TrailDetails"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/home" element={<TrailList />}/>
				<Route path={"trails/:trailId"} element={<TrailDetails />} />
            </Route> 
        </Routes>
    </>
}