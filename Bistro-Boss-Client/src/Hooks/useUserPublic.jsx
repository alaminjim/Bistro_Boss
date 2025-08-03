import axios from "axios";

const userPublic = axios.create({
  baseURL: "https://bistro-boss-server-three-sandy.vercel.app",
});

const useUserPublic = () => {
  return userPublic;
};

export default useUserPublic;
