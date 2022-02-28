import { Route, Routes } from "react-router-dom"
import { headerNavUrl } from "../constants/constants"
import About from "../pages/About"


const Routings = ()=>{
    return (
        <Routes>
            <Route path={headerNavUrl.aboutme.url} element={<About hasContent={true}/>}/>
            <Route path="/my-website.github.io/dummy" element={<About hasContent={false}/>}/>
            <Route path="/my-website.github.io/dummy2" element={<About hasContent={false}/>}/>
        </Routes>
    )
}


export default Routings