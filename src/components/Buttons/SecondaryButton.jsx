import PropTypes from "prop-types";

const SecondaryButton = ({ title, styles }) => {
  return <button className={styles}>{title}</button>;
};

export default SecondaryButton;

SecondaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
};
