import { Link, useNavigate } from "react-router-dom";
import signUp from "../../../assets/others/authentication2.png";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import toast from "react-hot-toast";
import useUserPublic from "../../../Hooks/useUserPublic";
import SocialLogin from "../Social/SocialLogin";

const SignUp = () => {
  const userPublic = useUserPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, profileUpdate } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        profileUpdate(data.name, data.photo);

        const userInfo = {
          name: data.name,
          email: data.email,
          photo: data.photo,
        };

        userPublic
          .post("/users", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              console.log("data added to database successful");
            }
          })

          .then(() => {})
          .catch((err) => {
            console.log(err);
          });

        toast.success("Sign Up Successful");
      })
      .catch((err) => {
        console.log(err);
      });
    reset();
    navigate("/");
  };

  return (
    <div className="my-28">
      <div className="signUp hero bg-base-200 min-h-screen">
        <div className="hero-content flex-row-reverse w-[1000px] h-[530px] shadow-lg">
          <div className="text-center lg:text-left">
            <img src={signUp} alt="" />
          </div>
          <div className="card w-full max-w-sm">
            <p className="text-center text-2xl font-bold">Sign Up</p>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Name"
                  {...register("name")}
                />
                <label className="label">Photo</label>
                <input
                  type="url"
                  name="photo"
                  className="input w-full"
                  placeholder="PhotoURL"
                  {...register("photo")}
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  name="email"
                  placeholder="Email"
                  {...register("email")}
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input w-full"
                  name="password"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500" role="alert">
                    password 6 charecter required
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500" role="alert">
                    valid password
                  </p>
                )}

                <input
                  className="btn bg-[#D1A054] text-white mt-4"
                  type="submit"
                  value="Sign Up"
                />
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
                <p className="text-orange-500 text-center">
                  Already registered? Go to log in
                  <Link to="/login">
                    <span className="underline ml-1.5 text-blue-600">
                      Log in
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
