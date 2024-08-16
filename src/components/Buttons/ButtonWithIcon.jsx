import PropTypes from "prop-types";

const ButtonWithIcon = ({ title, icon }) => {
  return (
    <button className="flex items-center gap-3 bg-green-400 text-black py-1  px-8 rounded-3xl font-medium hover:bg-green-300">
      <img src={icon} alt="" className="text-black" />
      {title}
    </button>
  );
};

export default ButtonWithIcon;

ButtonWithIcon.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
