import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_API } from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1> You're Offline !! Please check your internet connection.</h1>;
  }

  return !filteredList?.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black p-1"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg hover:bg-green-200 cursor-pointer"
            onClick={() => {
              const filteredRestaurants = allRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredList(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
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
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
            onClick={() => {
              setFilteredList(allRestaurants);
            }}
          >
            Show All
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredList.map((restaurant) => (
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
