import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/Shared/SectionTitle";
import useUserPublic from "../../Hooks/useUserPublic";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const userPublic = useUserPublic();
  const { axiosSecure } = useAxiosSecure();
  const { data: menu, refetch } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await userPublic.get("/menu");
      return res.data;
    },
  });

  const handleDelete = (item) => {
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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
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
          title={"---Hurry Up!---"}
          heading={"MANAGE ALL ITEMS"}
        ></SectionTitle>
      </div>
      <div className="my-12 mx-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menu?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn bg-[#D1A054] text-white btn-xs p-4">
                        <FaRegEdit className="w-5 h-5"></FaRegEdit>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn bg-[#B91C1C] text-white btn-xs p-4"
                    >
                      <MdDeleteForever className="w-5 h-5"></MdDeleteForever>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
