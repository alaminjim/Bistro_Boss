import "./Login.css";
import login from "../../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import toast from "react-hot-toast";
import SocialLogin from "../Social/SocialLogin";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const formData = location?.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successful");
        navigate(formData, { replace: true });
        form.reset();
        loadCaptchaEnginge(6);
        setDisabled(true);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleCaptcha = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="my-28">
      <div className="login hero bg-base-200 min-h-screen">
        <div className="hero-content flex w-[1000px] h-[530px] shadow-lg">
          <div className="text-center lg:text-left">
            <img src={login} alt="" />
          </div>
          <div className="card w-full max-w-sm">
            <p className="text-center text-2xl font-bold">Login</p>
            <div className="card-body">
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input w-full"
                  name="password"
                  placeholder="Password"
                />

                <label className="label">Captcha</label>
                <input
                  onBlur={handleCaptcha}
                  type="text"
                  className="input w-full"
                  name="captcha"
                  placeholder="Captcha"
                />
                <div>
                  <LoadCanvasTemplate />
                </div>
                <button
                  disabled={disabled}
                  className="btn bg-[#D1A054] text-white mt-4"
                >
                  Login
                </button>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
                <p className="text-orange-500 text-center">
                  New here? Create a New Account{" "}
                  <Link to="/signup">
                    <span className="underline text-blue-600">Sign Up</span>
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

export default Login;
