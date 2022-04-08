import { Route, Routes } from "react-router-dom"
import { headerNavUrl } from "../constants/constants"
import About from "../pages/About"
import Portfolio from "../pages/Portfolio"
import CHRobinsonTask from "../pages/CHRobinsonTask"

const Routings = ()=>{
    return (
        <Routes>
            <Route path={headerNavUrl.aboutme.url} element={<About hasContent={true}/>}/>
            <Route path={headerNavUrl.portfolio.url} element={<Portfolio hasContent={true}/>}/>
            <Route path={headerNavUrl.chrobinson.url} element={<CHRobinsonTask hasContent={true}/>}/>
            <Route path="/my-website.github.io/dummy2" element={<About hasContent={false}/>}/>
        </Routes>
    )
}


export default Routings