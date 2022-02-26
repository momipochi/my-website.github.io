import HeaderNavigation from '../components/HeaderNavigation'
import Footer from '../components/Footer'

const Layout = (props)=>{
    return (
        <div>
            <HeaderNavigation/>
            <div>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout