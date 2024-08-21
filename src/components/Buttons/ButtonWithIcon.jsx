import PropTypes from "prop-types";

const ButtonWithIcon = ({ title, icon, handleOpenModal, id, type }) => {
  return (
    <button
      className="flex items-center gap-3 bg-green-400 text-black py-1 pl-8 pr-14 rounded-3xl font-medium hover:bg-green-300"
      onClick={handleOpenModal}
    >
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
