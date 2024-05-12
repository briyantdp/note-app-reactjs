import PropTypes from "prop-types";

function Footer({ date }) {
  const footerClassName = "footer py-8 text-center font-mono font-light";
  return (
    <footer className={footerClassName}>
      <span className="text-white text-lg">Copyright © {date} - </span>
      <a
        href="https://github.com/briyantdp"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-600 text-lg"
      >
        Bryant Dawson Priyantoro
      </a>
    </footer>
  );
}

Footer.propTypes = {
  date: PropTypes.number.isRequired,
};

export default Footer;
