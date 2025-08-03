import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Components/Home/NavBar";
import Footer from "../Components/Home/Footer";

const Layouts = () => {
  const location = useLocation();
  console.log(location);
  const isLogIn =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup");
  return (
    <div>
      {isLogIn || <NavBar></NavBar>}
      <div className="min-h-[calc(100vh-295px)]">
        <Outlet></Outlet>
      </div>
      {isLogIn || <Footer></Footer>}
    </div>
  );
};

export default Layouts;
