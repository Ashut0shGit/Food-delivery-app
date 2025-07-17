import ItemList from "./ItemList";
import { ChevronDown, ChevronUp } from "lucide-react";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const clickHandler = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 p-4 mx-auto my-4 bg-gray-50 rounded-lg shadow-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={clickHandler}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>
            {showItem ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </span>
        </div>

        {showItem && <ItemList items={data?.itemCards} />}
      </div>
      {/* Item List */}
    </div>
  );
};

export default RestaurantCategory;
