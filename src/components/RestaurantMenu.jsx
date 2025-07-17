import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines = [],
    avgRatingString,
    totalRatingsString,
    locality,
    areaName,
    city,
    costForTwoMessage,
  } = resInfo?.cards.find((card) => card?.card?.card?.info).card?.card?.info ||
  {};

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (c) => c?.card?.card?.itemCards
    )?.card?.card?.itemCards;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h2 className="font-bold my-6 text-2xl">{name}</h2>

      <div className="flex justify-center items-center gap-2 text-sm font-bold text-gray-600">
        <span className="text-sm font-bold text-white bg-green-600 px-2 py-1 rounded-md flex items-center">
          <span className="mr-1 text-sm">★</span>
          {avgRatingString}
        </span>

        <span>({totalRatingsString})</span>
        <span className="text-lg font-bold text-gray-400">•</span>
        <span>{costForTwoMessage}</span>
      </div>

      <div className="">
        <p className="font-bold text-orange-600 underline">
          {cuisines.join(", ")}
        </p>
        {/* <p className="restaurant-location font-semibold text-gray-600">
          {locality}, {areaName}, {city}
        </p> */}
      </div>
      {categories?.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
