import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/Shared/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { axiosSecure } = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
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
        axiosSecure.delete(`/users/${_id}`).then((res) => {
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

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/user/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "successful",
          text: `${user?.name} is admin now`,
          icon: "success",
          confirmButtonText: "Okay",
        });
        refetch();
      }
    });
  };

  return (
    <div>
      <div>
        <SectionTitle
          title={"---How many??---"}
          heading={"MANAGE ALL USERS"}
        ></SectionTitle>
      </div>
      <div className="w-[900px] h-[970px] bg-gray-100 ml-10 my-10">
        <h2 className="pt-10 pl-10 text-2xl font-semibold">
          TOTAL USERS: {users?.length}
        </h2>
        <div className="overflow-x-auto mt-2 rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      <p className="text-orange-400">Admin</p>
                    ) : (
                      <span onClick={() => handleMakeAdmin(user)}>
                        <RiAdminFill className="w-5 h-5"></RiAdminFill>
                      </span>
                    )}
                  </td>
                  <td>
                    <span onClick={() => handleDelete(user._id)}>
                      <RiDeleteBin2Fill className="w-6 h-6"></RiDeleteBin2Fill>
                    </span>
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

export default AllUsers;
