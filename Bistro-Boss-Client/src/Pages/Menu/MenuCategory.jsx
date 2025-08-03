import { Link } from "react-router-dom";
import PopularMenuCard from "../Home/PopularMenuCard";
import CoverMenu from "./CoverMenu";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <CoverMenu img={img} title={title}></CoverMenu>}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {items.map((item) => (
          <PopularMenuCard key={item._id} item={item}></PopularMenuCard>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to={`/order`}>
          <button className="w-[250px] h-[54px] rounded-2xl font-semibold border-b-4 border-[#1F2937] hover:bg-gray-500 hover:text-white">
            Order Your Favorite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
