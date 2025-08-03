import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="text-3xl m-5 font-semibold">
        <h1>
          Hi, Welcome{" "}
          <span>{user?.displayName ? user?.displayName : "Back"}</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default UserHome;
