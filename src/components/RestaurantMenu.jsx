import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const { resId } = useParams();

  const fetchData = async () => {
    const url = `${MENU_API}${resId}`;
    console.log(url);
    const data = await fetch(url);

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines = [],
    avgRatingString,
    locality,
    areaName,
    city,
    costForTwoMessage,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  console.log(itemCards);

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <p> {cuisines.join(", ")}</p>
      <p> {costForTwoMessage}</p>
      <p>{avgRatingString} ⭐</p>
      <p>
        {locality}, {areaName}, {city}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{"  Rs.  "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
