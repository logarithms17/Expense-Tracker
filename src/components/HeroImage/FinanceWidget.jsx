import PropTypes from "prop-types";

const FinanceWidget = ({
  title,
  backgroundColor,
  textColor,
  percentage,
  display,
  src,
}) => {
  return (
    <div
      className={`${display} bottom-[130px] -left-16 ${backgroundColor} rounded-3xl flex  items-center p-7`}
    >
      <img
        src={src}
        alt="arrow-icon"
        className="p-3 bg-green-400 rounded-xl w-[40px] mr-3"
      />
      <div className="leading-6">
        <p className="text-neutral-500 text-[14px]">{title}</p>
        <div className="flex items-center justify-center">
          <p className={`${textColor} font-bold text-2xl`}>$632.000</p>
          <p className="text-green-500 text-[13px] px-3 ml-3 rounded-xl bg-green-100 font-medium">
            {percentage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinanceWidget;

FinanceWidget.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
