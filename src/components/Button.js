import PropTypes from 'prop-types'

const Button = ({ text, section, onClick }) => {
    return (
        <button className={section} onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: "default"
}

Button.propTypes = {
    text: PropTypes.string,
}

export default Button
