import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const FinanceWidget = ({
  title,
  styles,
  percentage,
  textColor,
  src,
  total,
}) => {
  const formattedExpense = total.toLocaleString(undefined, {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });

  const currency = useSelector((state) => state.auth.user.currency);
  console.log(currency);

  let symbol;

  if (currency === "uah") {
    symbol = "₴";
  } else if (currency === "usd") {
    symbol = "$";
  } else if (currency === "eur") {
    symbol = "€";
  }

  return (
    <div className={styles}>
      <img
        src={src}
        alt="arrow-icon"
        className="p-3 bg-green-400 rounded-xl w-[40px] mr-3"
      />
      <div className="leading-6">
        <p className="text-neutral-500 text-[14px]">{title}</p>
        <div className="flex items-center justify-center">
          <p className={`${textColor} font-bold text-2xl`}>
            {symbol}
            {formattedExpense}
          </p>
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
  percentage: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
