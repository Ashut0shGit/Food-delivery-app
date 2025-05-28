const Shimmer = () => {
  return (
    <div className="shimmer-container">
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
    <div className="shimmer-card">
      <div
        style={{
          height: "150px",
          backgroundColor: "#e0e0e0",
          borderRadius: "8px",
        }}
      ></div>
      <div
        style={{
          height: "20px",
          margin: "10px 0",
          backgroundColor: "#e0e0e0",
          borderRadius: "4px",
        }}
      ></div>
      <div
        style={{
          height: "20px",
          width: "60%",
          backgroundColor: "#e0e0e0",
          borderRadius: "4px",
        }}
      ></div>
    </div>
  );
};

export default Shimmer;
