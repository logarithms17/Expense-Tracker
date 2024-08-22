import React, { useMemo, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useSelector, useDispatch } from "react-redux";
import CategoriesList from "./CategoriesList";
import { getTransactions } from "../../redux/authOperations";

// Function to generate a random color
const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Function to ensure there are enough colors
const getColors = (count) => {
  const COLORS = [
    "#00E676",
    "#1DE9B6",
    "#FFFFFF",
    "#757575",
    "#FF5722",
    "#FFC107",
    "#9C27B0",
    "#E91E63",
  ];
  if (count <= COLORS.length) {
    return COLORS.slice(0, count);
  }
  const additionalColors = [];
  for (let i = COLORS.length; i < count; i++) {
    additionalColors.push(generateRandomColor());
  }
  return [...COLORS, ...additionalColors];
};

const ExpenseChart = ({ chartType }) => {
  console.log(chartType);
  const dispatch = useDispatch();

  useEffect(() => {
    if (chartType) {
      dispatch(getTransactions({ type: chartType }));
    }
  }, [dispatch, chartType]);

  const transactions = useSelector((state) => state.auth.transactions.data);

  const data = useMemo(() => {
    const categoryMap = transactions.reduce((acc, transaction) => {
      const { category, sum, type } = transaction;
      const categoryName = category?.categoryName;

      if (type === "expenses" && categoryName) {
        if (!acc[categoryName]) {
          acc[categoryName] = 0;
        }
        acc[categoryName] += sum;
      }

      if (type === "incomes" && categoryName) {
        if (!acc[categoryName]) {
          acc[categoryName] = 0;
        }
        acc[categoryName] -= sum;
      }

      return acc;
    }, {});

    const totalSum = Object.values(categoryMap).reduce(
      (acc, value) => acc + value,
      0
    );

    const sortedData = Object.keys(categoryMap)
      .map((categoryName, index) => ({
        name: categoryName,
        value: Number(
          ((categoryMap[categoryName] / totalSum) * 100).toFixed(2)
        ), // Ensure this is a number
        color: getColors(Object.keys(categoryMap).length)[index],
      }))
      .sort((a, b) => b.value - a.value);

    return sortedData;
  }, [transactions]);

  return (
    <div
      className="relative"
      style={{
        width: "100%",
        height: "300px",
        backgroundColor: "#1E1E1E",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <h2 style={{ color: "white", marginBottom: "20px" }}>
        {chartType === "expenses"
          ? "Expenses Categories"
          : "Incomes Categories"}
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="30%"
            cy="70%"
            startAngle={180}
            endAngle={0}
            innerRadius={100}
            outerRadius={160}
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color} // Use the color from the data
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div
        className="absolute top-[243px] left-[164px]"
        style={{
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        100%
      </div>
      <div
        className="h-[126px] bg-neutral-900 w-[191px] absolute top-[100px] right-[36px]"
        style={{ backgroundColor: "#1E1E1E" }}
      >
        <CategoriesList data={data} />
      </div>
    </div>
  );
};

export default ExpenseChart;
