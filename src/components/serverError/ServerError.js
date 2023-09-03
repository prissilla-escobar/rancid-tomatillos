import { Link } from 'react-router-dom'
import './ServerError.css'
import PropTypes from 'prop-types'

function ServerError ({ serverError, resetError }) {

    return (
        <div className="serverError">
            <p>{serverError.message}</p>
            <Link to={'/'} onClick={() => {resetError()}}>
                <text>"Please Return Home"</text>
            </Link>
        </div>
    )
}

export default ServerError

ServerError.propTypes = {
    serverError: PropTypes.string.isRequired,
    resetError: PropTypes.func.isRequired
}