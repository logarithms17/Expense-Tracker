import PropTypes from "prop-types";

const PrimaryButton = ({ title }) => {
  return (
    <button className="bg-green-400 text-black py-3 px-10 rounded-3xl font-medium">
      {title}
    </button>
  );
};

export default PrimaryButton;

PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
};
