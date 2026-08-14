import logo from './assets/morimung-logo.png'
import bg from "./assets/background/moringa.jpg"
import p1 from "./assets/mori-mung-pieces/p-1.png"
import p2 from "./assets/mori-mung-pieces/p-2.png"
import s1 from "./assets/mori-mung-pieces/s-1.png"
import s2 from "./assets/mori-mung-pieces/s-2.png"
import s3 from "./assets/mori-mung-pieces/s-3.png"
import s4 from "./assets/mori-mung-pieces/s-4.png"
import s5 from "./assets/mori-mung-pieces/s-5.png"
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