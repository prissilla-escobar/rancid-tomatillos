import './ServerError.css'
import PropTypes from 'prop-types'

function ServerError ({ serverError }) {
    return (
        <div className="serverError">
            <div>{serverError}</div>
        </div>
    )
}

export default ServerError

ServerError.propTypes = {
    serverError: PropTypes.string.isRequired
}