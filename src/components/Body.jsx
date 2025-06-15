import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_API } from "../utils/constants.js";

const Body = () => {
  let [filteredList, setFilteredList] = useState([]);
  let [allRestaurants, setAllRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API);

    const json = await data.json();
    console.log(json);

    const restaurantCard = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurantCards =
      restaurantCard.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setFilteredList(restaurantCards);
    setAllRestaurants(restaurantCards);
  };

  return !filteredList?.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurants = allRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredList(filteredRestaurants);
            }}
          >
            🔍
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let topRated = filteredList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredList(topRated);
          }}
        >
          {" "}
          Top Rated Restaurants
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setFilteredList(allRestaurants);
          }}
        >
          Show All
        </button>
      </div>
      <div className="res-container">
        {filteredList
          // .filter((restaurant) => restaurant && restaurant.info)
          .map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
