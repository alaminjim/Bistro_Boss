import SectionTitle from "../../Components/Shared/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import OrderTabs from "../Order/OrderTabs";

const Cheaf = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad").slice(0, 3);
  return (
    <section>
      <SectionTitle
        title={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="my-8">
        <OrderTabs item={salad}></OrderTabs>
      </div>
    </section>
  );
};

export default Cheaf;
