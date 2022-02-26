import { Route, Routes } from "react-router-dom"
import { headerNavUrl } from "../constants/constants"
import About from "../pages/About"


const Routings = ()=>{
    return (
        <Routes>
            <Route path={headerNavUrl.aboutme.url} element={<About/>}/>
            <Route path="/dummy" element={<About/>}/>
            <Route path="/dummy2" element={<About/>}/>
        </Routes>
    )
}


export default Routings