const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap justify-center items-center p-2">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      ,
    </div>
  );
};

const ShimmerCard = () => {
  return (
    <div className="relative w-[210px] h-[320px] m-3 p-2 rounded-xl bg-[#f6f7f8] overflow-hidden">
      <div className="h-[150px] bg-[#e0e0e0] rounded-lg mb-4"></div>
      <div className="h-5 bg-[#e0e0e0] rounded mb-2"></div>
      <div className="h-5 w-[60%] bg-[#e0e0e0] rounded"></div>

      <div className="absolute top-0 left-[-150px] w-[150px] h-full bg-gradient-to-r from-[#f6f7f800] via-white/60 to-[#f6f7f800] animate-shimmer"></div>
    </div>
  );
};

export default Shimmer;
