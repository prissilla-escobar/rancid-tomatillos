import './Header.css'
import logo from '../../images/Rancid Logo light red.png'

function Header() {
    return (
        <header>
            <img className="rancid-logo" src={logo} alt="a movie theater sign that says rancid tomatillos" />
        </header>
    )
}

export default Header