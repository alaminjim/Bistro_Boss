import { Helmet } from "react-helmet-async";
import Banner from "../../Pages/Home/Banner";
import BistroReview from "../../Pages/Home/BistroReview";
import Category from "../../Pages/Home/Category";
import Cheaf from "../../Pages/Home/Cheaf";
import Contact from "../../Pages/Home/Contact";
import Feature from "../../Pages/Home/Feature/Feature";
import PopularMenu from "../../Pages/Home/PopularMenu";
import Testimonials from "../../Pages/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BistroReview></BistroReview>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <Cheaf></Cheaf>
      <Feature></Feature>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
