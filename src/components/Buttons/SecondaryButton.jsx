import PropTypes from "prop-types";

const SecondaryButton = ({ title }) => {
  return (
    <button className="bg-black text-white py-3 px-10 rounded-3xl font-normal border-[1px] border-slate-300">
      {title}
    </button>
  );
};

export default SecondaryButton;

SecondaryButton.propTypes = {
  title: PropTypes.string.isRequired,
};
