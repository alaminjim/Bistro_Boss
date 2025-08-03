import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();
  const { data: isAdmin, isPending: adminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });
  return { isAdmin, adminLoading };
};

export default useAdmin;
