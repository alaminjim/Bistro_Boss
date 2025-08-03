import { useState } from "react";
import order from "../../assets/shop/banner2.jpg";
import CoverMenu from "../Menu/CoverMenu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/Shared/FoodCard";
import OrderTabs from "./OrderTabs";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const [menu] = useMenu();
  const [tab, setTab] = useState(0);
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | order</title>
      </Helmet>
      <CoverMenu
        img={order}
        title={"ORDER OUR FOOD"}
        heading={
          "Craving something delicious? Order your favorite meals with just a few clicks! Explore our wide selection of dishes, freshly prepared and delivered hot to your doorstep. Whether it's lunch, dinner, or a quick snack — we've got you covered. Fast, easy, and always tasty!"
        }
      ></CoverMenu>
      <div>
        <Tabs defaultIndex={tab} onSelect={(index) => setTab(index)}>
          <TabList className="my-12 flex flex-row justify-center items-center">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTabs item={salad}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={pizza}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={soup}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={dessert}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={drinks}></OrderTabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
