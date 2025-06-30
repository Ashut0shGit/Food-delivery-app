import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla: { slaString },
  } = resData.info;
  return (
    <div
      className="res-card m-4 p-4 w-[220px] rounded-lg shadow-lg bg-gray-100
      hover:bg-gray-200 cursor-pointer hover:shadow-xl transition-all duration-200 ease-in-out"
    >
      <img
        alt="restaurant"
        className="rounded-md w-[200px] h-[160px] object-cover"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
