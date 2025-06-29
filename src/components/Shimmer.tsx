const Shimmer = () => {
  const count = Array.from(Array(12).keys());

  return (
    <div className="flex flex-row flex-wrap gap-10 justify-start items-center">
      {count.map((elem) => (
        <div
          key={elem}
          className="w-64 h-64 border border-gray-300 shadow-lg overflow-hidden bg-white flex flex-col justify-between animate-pulse"
        >
          <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 h-[30vh] aspect-square " />
          <div className="p-4">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
