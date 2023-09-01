import './Header.css'
import logo from '../../images/Rancid Logo light red.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <Link to={`/`}>
                <img className="rancid-logo" src={logo} alt="a movie theater sign that says rancid tomatillos" />
            </Link>
        </header>
    )
}

export default Header