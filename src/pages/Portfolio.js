import { content } from "../constants/constants"
import portfoliocss from '../assets/styles/portfolio.module.css'


const Portfolio = ()=>{
    return (
        <div className={portfoliocss.main}>
            <h5>{content.default}</h5>
        </div>
    )
}

export default Portfolio