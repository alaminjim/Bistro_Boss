import { NavLink, Outlet } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaPaypal,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { FcMenu } from "react-icons/fc";
import { IoFastFood } from "react-icons/io5";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const { isAdmin } = useAdmin();
  return (
    <div className="flex">
      <div className="w-[320px] min-h-screen bg-[#D1A054]">
        <div className="pt-5 text-2xl text-center font-semibold">
          <h2>BISTRO_BOSS</h2>
          <p className="pl-3">Restaurant</p>
        </div>
        <ul className="pt-7 pl-8 space-y-3 *:text-lg">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/admin-home">
                  <span className="flex items-center gap-2  font-bold">
                    <FaHome className="w-6  h-6"></FaHome> Admin Home
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-items">
                  <span className="flex items-center gap-2  font-bold">
                    <FaUtensils className="w-5 h-5"></FaUtensils> Add Items
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/items">
                  <span className="flex items-center gap-2  font-bold">
                    <FaList className="w-5 h-5"></FaList> ManageItems
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <span className="flex items-center gap-2  font-bold">
                    <FaBook className="w-5 h-5"></FaBook> ManageBooking
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <span className="flex items-center gap-2  font-bold">
                    <FaUser className="w-5 h-5"></FaUser> All User
                  </span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <span className="flex items-center gap-2  font-bold">
                    <FaHome className="w-6  h-6"></FaHome> User Home
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <span className="flex items-center gap-2  font-bold">
                    <TiShoppingCart className="w-6 h-6"></TiShoppingCart> My
                    Cart
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history">
                  <span className="flex items-center gap-2  font-bold">
                    <FaPaypal className="w-5 h-5"></FaPaypal>
                    Payment History
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <span className="flex items-center gap-2  font-bold">
                    <FaCalendar className="w-5 h-5"></FaCalendar> Reservation
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <span className="flex items-center gap-2  font-bold">
                    <MdReviews className="w-6 h-6"></MdReviews>Review
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <span className="flex items-center gap-2  font-bold">
                    <FaList className="w-5 h-5"></FaList> My Booking
                  </span>
                </NavLink>
              </li>
            </>
          )}
          <div className="divider mr-12"></div>
          <li>
            <NavLink to="/">
              <span className="flex items-center gap-2  font-bold">
                <FaHome className="w-6  h-6"></FaHome> Home
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <span className="flex items-center gap-2  font-bold">
                <FcMenu className="w-6 h-6"></FcMenu> Menu
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/order">
              <span className="flex items-center gap-2 font-bold">
                <IoFastFood className="w-5 h-5"></IoFastFood> Order Food
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
