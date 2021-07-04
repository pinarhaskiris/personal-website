import PropTypes from 'prop-types'

const BigHeader = ({ id, title }) => {
    return (
        <h1 id={id} className="bigHeader">{title}</h1>
    )
}

BigHeader.defaultProps = {
    title: 'HELLO, WORLD'
}

BigHeader.propTypes = {
    title: PropTypes.string,
}

export default BigHeader
