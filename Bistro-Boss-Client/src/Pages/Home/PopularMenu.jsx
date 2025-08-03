import SectionTitle from "../../Components/Shared/SectionTitle";
import PopularMenuCard from "./PopularMenuCard";
import useMenu from "../../Hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-24">
      <SectionTitle
        title={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {popular?.map((item) => (
          <PopularMenuCard key={item._id} item={item}></PopularMenuCard>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/menu">
          <button className="w-[200px] h-[64px] text-xl rounded-2xl font-semibold border-b-4 border-[#1F2937] hover:bg-gray-500 hover:text-white">
            View Full Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
