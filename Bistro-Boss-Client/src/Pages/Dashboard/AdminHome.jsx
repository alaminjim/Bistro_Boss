import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import {
  FaBook,
  FaDollarSign,
  FaJediOrder,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <div className="text-3xl m-5 font-semibold">
        <h1>
          Hi, Welcome{" "}
          <span>{user?.displayName ? user?.displayName : "Back"}</span>
        </h1>
      </div>
      <div className="stats shadow mx-10 gap-5">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-3xl"></FaDollarSign>
          </div>
          <div className="stat-title text-xl font-semibold">Revenue</div>
          <div className="stat-value">{stats?.revenue}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title text-xl font-semibold">Users</div>
          <div className="stat-value">{stats?.user}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook className="text-2xl"></FaBook>
          </div>
          <div className="stat-title text-xl font-semibold">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUtensils className="text-3xl"></FaUtensils>
          </div>
          <div className="stat-title text-xl font-semibold">Menu Items</div>
          <div className="stat-value">{stats?.menuItems}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
