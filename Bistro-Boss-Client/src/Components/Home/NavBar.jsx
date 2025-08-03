import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import toast from "react-hot-toast";
import { BsCart4 } from "react-icons/bs";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { isAdmin } = useAdmin();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("log out Successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order">Order Food</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink to="/dashboard/admin-home">Dashboard</NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink to="/dashboard/home">Dashboard</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 max-w-6xl bg-[#15151546] text-white shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <p className="btn btn-ghost text-xl">BISTRO_BOSS</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/dashboard/cart">
            <div className="mr-4 mt-2">
              <BsCart4 className="w-6 h-6"></BsCart4>{" "}
              <div className="-mt-[39px] ml-2 pr-2 pl-2  absolute bg-gray-300 text-black rounded-full">
                {cart?.length}
              </div>
            </div>
          </Link>
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="btn bg-gradient-to-r from-orange-600 to-amber-400 hover:from-orange-600 hover:to-amber-400 text-white font-bold px-4 rounded shadow border-none"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn bg-gradient-to-r from-orange-600 to-amber-400 hover:from-orange-600 hover:to-amber-400 text-white font-bold px-4 rounded shadow border-none">
                  Log In
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
