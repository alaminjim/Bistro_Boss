import { Helmet } from "react-helmet-async";
import img from "../../assets/menu/banner3.jpg";
import CoverMenu from "./CoverMenu";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/Shared/SectionTitle";
import MenuCategory from "./MenuCategory";
import desserts from "../../assets/menu/dessert-bg.jpeg";
import pizzas from "../../assets/menu/pizza-bg.jpg";
import soups from "../../assets/menu/soup-bg.jpg";
import salads from "../../assets/menu/salad-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <CoverMenu
        img={img}
        title="OUR MENU"
        heading={
          "Discover a world of flavor with our carefully crafted menu. From sizzling starters to mouthwatering mains and indulgent desserts, every dish is made with fresh ingredients and bold taste. Whether you're craving comfort food or something adventurous, we have something for every appetite. Come hungry, leave delighted."
        }
      ></CoverMenu>
      {/* offered item */}
      <SectionTitle heading={"TODAY'S OFFER"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert items */}
      <div className="my-12">
        <MenuCategory
          items={dessert}
          title="DESSERT"
          img={desserts}
        ></MenuCategory>
      </div>
      {/* pizzas */}
      <div className="my-12">
        <MenuCategory items={pizza} title="PIZZA" img={pizzas}></MenuCategory>
      </div>
      {/* salads */}
      <div className="my-12">
        <MenuCategory items={salad} title="Salad" img={salads}></MenuCategory>
      </div>
      {/* soups */}
      <div className="my-12">
        <MenuCategory items={soup} title="SOUP" img={soups}></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
