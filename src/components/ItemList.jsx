import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="mt-4">
      {items.map((item, index) => (
        <div
          key={item?.card?.info?.id}
          className="p-4 mb-4 border-gray-200 border-b-2 text-left flex justify-between items-start"
        >
          <div className="w-3/4 pr-4">
            <div className="mb-1">
              {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                <div
                  className="w-4 h-4 border-2 border-green-600 rounded-sm flex items-center justify-center"
                  aria-label="Veg"
                >
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
              ) : (
                <div
                  className="w-4 h-4 border-2 border-red-600 rounded-sm flex items-center justify-center"
                  aria-label="Non-Veg"
                >
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
              )}

              <h3 className="text-base font-semibold text-gray-800">
                {item?.card?.info?.name}
              </h3>
              <p className="text-sm text-gray-600">
                ₹
                {(item?.card?.info?.price ?? item?.card?.info?.defaultPrice) /
                  100}
              </p>
            </div>
            <p className="text-xs text-gray-500 ">
              {item?.card?.info?.description}
            </p>
          </div>

          <div className="w-3/12 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-full h-full object-cover"
            />

            <div className="bottom-0 left-0 w-full">
              <button className="w-full py-2 bg-white text-green-600 font-semibold text-sm border-t border-gray-200 hover:bg-gray-50 cursor-pointer">
                ADD +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
