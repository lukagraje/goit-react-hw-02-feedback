import PropTypes from "prop-types";

const Section = ({ title, children }) => {
    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
}

export default Section;