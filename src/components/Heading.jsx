import PropTypes from "prop-types";

function Heading({ children }) {
  return (
    <h1 className="font-semibold font-mono text-4xl leading-normal text-white text-center mb-4">
      {children}
    </h1>
  );
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading;
