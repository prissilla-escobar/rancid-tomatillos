import './ServerError.css'
import PropTypes from 'prop-types'

function ServerError ({ serverError }) {
    console.log({serverError})
    return (
        <div className="serverError">
            <div>{serverError.message}</div>
        </div>
    )
}

export default ServerError

ServerError.propTypes = {
    serverError: PropTypes.string.isRequired
}