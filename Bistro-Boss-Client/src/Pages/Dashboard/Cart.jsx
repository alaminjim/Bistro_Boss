import Swal from "sweetalert2";
import SectionTitle from "../../Components/Shared/SectionTitle";
import useCart from "../../Hooks/useCart";
import { RiDeleteBin2Fill } from "react-icons/ri";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart?.reduce((sum, item) => sum + item.price, 0);
  const { axiosSecure } = useAxiosSecure();
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <div>
        <SectionTitle
          title={"---My Cart---"}
          heading={"WANNA ADD MORE?"}
        ></SectionTitle>
      </div>

      <div className="w-[900px] h-[970px] bg-gray-100 ml-10 my-10">
        <div className="uppercase text-2xl font-semibold flex justify-between p-3.5">
          <h1>Orders Item: {cart?.length}</h1>
          <h2>Total Price:{totalPrice}</h2>
          {cart?.length ? (
            <>
              <Link to="/dashboard/payment">
                <button className="btn bg-[#D1A054] text-white">Pay</button>
              </Link>
            </>
          ) : (
            <>
              <button disabled className="btn bg-[#D1A054] text-white">
                Pay
              </button>
            </>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <span onClick={() => handleDelete(item._id)}>
                      <RiDeleteBin2Fill className="w-6 h-6"></RiDeleteBin2Fill>
                    </span>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
