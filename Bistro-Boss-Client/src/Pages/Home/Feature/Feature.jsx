import SectionTitle from "../../../Components/Shared/SectionTitle";
import feature from "../../../assets/home/featured.jpg";
import "./Feature.css";

const Feature = () => {
  return (
    <section className="feature-item my-6 bg-fixed">
      <div className="mb-28 pt-5">
        <SectionTitle
          title={"---Menu---"}
          heading={"OUR MENU SECTIONS"}
        ></SectionTitle>
      </div>
      <div className="md:flex justify-center items-center pb-20 px-16">
        <div>
          <img src={feature} alt="" />
        </div>
        <div className="ml-10 space-y-2 text-white">
          <h1>March 20, 2023</h1>
          <h2>WHERE CAN I GET SOME?</h2>
          <p>
            Whether you're planning a casual meal with friends or a special
            dinner with family, Bistro Boss is definitely a great choice. I’ll
            surely visit again and highly recommend it to others.b
          </p>
          <div className="text-center mt-12">
            <button className="w-[150px] h-[54px] text-xl rounded-2xl font-semibold border-b-4 border-[#1F2937] hover:bg-gray-500 hover:text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
