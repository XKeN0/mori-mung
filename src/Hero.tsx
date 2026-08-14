import logo from './assets/morimung-logo.png'
import bg from "./assets/background/moringa.jpg"
import './Hero.css'

function Hero() {
    return (
        <div className="dashboard"
        style={{ backgroundImage: `url(${bg})` }}>
            <img
                src={logo}
                alt="Mori Mung Logo"
                className="mori-mung-logo"
            />
        </div>
    )
}

export default Hero