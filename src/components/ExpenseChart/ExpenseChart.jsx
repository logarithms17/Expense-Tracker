import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CategoriesList from "./CategoriesList";

const ExpenseChart = () => {
  const data = [
    { name: "Hobby", value: 45, color: "#00E676" },
    { name: "Products", value: 35, color: "#1DE9B6" },
    { name: "Cinema", value: 20, color: "#FFFFFF" },
    { name: "Health", value: 10, color: "#757575" },
  ];

  const colors = data.map((data) => data.color);

  const COLORS = colors;

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
        Expenses categories
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
                fill={COLORS[index % COLORS.length]}
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
        <CategoriesList data={data} colors={COLORS} />
      </div>
    </div>
  );
};

export default ExpenseChart;
