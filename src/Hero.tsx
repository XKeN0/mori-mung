import logo from './assets/morimung-logo.png'
import packaging from "./assets/mori-packaging.png"
import './Hero.css'

function Hero() {
    return (
        <div className="dashboard">
            <img
                src={logo}
                alt="Mori Mung Logo"
                className="mori-mung-logo"
            />
        </div>
    )
}

export default Hero