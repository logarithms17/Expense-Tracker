import PropTypes from "prop-types";

const SettingsButton = ({ title }) => {
  return (
    <button className="bg-neutral-800 py-2 px-5 rounded-3xl">{title}</button>
  );
};

export default SettingsButton;

SettingsButton.propTypes = {
  title: PropTypes.string.isRequired,
};
