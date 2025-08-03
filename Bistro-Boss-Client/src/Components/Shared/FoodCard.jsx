import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { axiosSecure } = useAxiosSecure();
  const [, refetch] = useCart();

  const handleCart = async () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };

      try {
        await axiosSecure.post(`/carts`, cartItem).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: `${name} add to cart successfully`,
              text: "Do you want to continue",
              icon: "success",
              confirmButtonText: "Cool",
            });
            refetch();
          }
        });
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      Swal.fire({
        title: "You are not Logged in",
        text: "please logged in and add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <p className="bg-gray-800 text-white absolute right-0 mr-4 mt-3 p-2">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={handleCart}
              className="w-[150px] h-[40px] text-[#BB8506]  rounded-2xl font-semibold border-b-4 border-[#BB8506] hover:bg-[#111827] hover:text-orange-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
