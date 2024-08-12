const CategoriesList = ({ data }) => {
  return (
    <ul className="flex flex-col gap-[10px]">
      {data.map(({ name, value, color }, index) => (
        <li
          key={index}
          className="text-black flex justify-between"
          style={{ color: color }}
        >
          <div className="flex items-center">
            <div
              className="w-3 h-3 rounded-[6px] mr-3"
              style={{
                backgroundColor: color,
              }}
            ></div>
            <p className="description">{name}</p>
          </div>
          <p className="text-white font-semibold">{value}%</p>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
