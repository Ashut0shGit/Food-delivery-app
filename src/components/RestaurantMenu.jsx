import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import "./RestaurantMenu.css";
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
  } = resInfo?.cards.find((card) => card?.card?.card?.info).card?.card?.info ||
  {};

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (c) => c?.card?.card?.itemCards
    )?.card?.card?.itemCards;

  console.log(itemCards);

  return (
    <div className="restaurant-menu">
      <div className="restaurant-header">
        <div className="restaurant-header-left">
          <h2 className="restaurant-name">{name}</h2>
          <p className="restaurant-cuisines">{cuisines.join(", ")}</p>
          <p className="restaurant-location">
            {locality}, {areaName}, {city}
          </p>
          <h3 className="restaurant-cost">{costForTwoMessage}</h3>
        </div>
        <div className="restaurant-rating-box">
          <p className="restaurant-rating">{avgRatingString} ⭐</p>
        </div>
      </div>

      <hr />
      <h2 className="menu-heading">Menu</h2>

      <div className="menu-container">
        {itemCards?.map((item) => {
          const info = item.card.info;
          const isVeg = info.itemAttribute?.vegClassifier === "VEG";
          const price = info.price / 100 || info.defaultPrice / 100;

          return (
            <div key={info.id} className="menu-card">
              <div className="menu-card-details">
                <div className="veg-icon">
                  <span className={isVeg ? "dot veg" : "dot non-veg"}></span>
                </div>
                <h3 className="menu-name">{info.name}</h3>
                <p className="menu-price">₹{price}</p>
                <p className="menu-desc">{info.description}</p>
                <button className="add-btn">Add +</button>
              </div>

              {info.imageId && (
                <div className="menu-image-wrapper">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100/${info.imageId}`}
                    alt={info.name}
                    className="menu-img"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
