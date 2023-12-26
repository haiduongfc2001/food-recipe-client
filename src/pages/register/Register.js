import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as APIService from "../../services/APIService";
import {
  API_SERVICE,
  CONFIRM_PWD_VALIDATE,
  PWD_VALIDATE,
  STATUS_CODE,
} from "../../utils/Constants";
import { useNavigate } from "react-router-dom";
import { ToastForm } from "../../utils/ToastForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faKey,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { validatePassword } from "../../utils/Regex";
import storageInstance from "../../services/Storage";
import FoodLRegister from "../../assets/food-register.jpg";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [usernameError, setUsernameError] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    setPasswordError(false);
    setConfirmPasswordError(false);
    setUsernameError(false);

    if (!validatePassword(password)) {
      setPasswordError(true);
      return;
    }

    if (password !== confirmPassword) {
      //   toast.error(CONFIRM_PWD_VALIDATE, ToastForm);
      setConfirmPasswordError(true);
      return;
    }

    const response = await APIService[API_SERVICE.USER_REGISTER]({
      username: username.trim(),
      password: password.trim(),
    });

    if (response?.status === STATUS_CODE.OK) {
      navigate("/login");
      toast.success(response.data.message, ToastForm);
    } else {
      setUsernameError(true);
      setUsernameErrorMessage(response?.data?.message);
      //   toast.error(response?.data?.message, ToastForm);
    }
  };

  //stop going to login page if already had token in local storage
  useEffect(() => {
    const isAuth = storageInstance.getLocalFoodRecipeToken();
    if (isAuth && isAuth !== "undefined") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${FoodLRegister})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-lg w-full p-8 bg-gray-200 shadow-lg rounded-xl space-y-4 mx-2">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Đăng ký
        </h2>
        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label
              htmlFor="username"
              className="text-md font-bold text-gray-600 float-left"
            >
              Tên đăng nhập
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute top-[68%] transform -translate-y-1/2 left-3 text-black border-r-2 border-solid border-gray-400 pr-2 w-[16px]"
              />
              <input
                type="text"
                id="username"
                name="username"
                className="pl-10 mt-1 p-2 w-full rounded-md border-1 border-solid border-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nhập tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {usernameError && (
                <p className="text-left text-red-500 text-sm pt-2">
                  {usernameErrorMessage}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-md font-bold text-gray-600 float-left"
            >
              Mật khẩu
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faKey}
                className="absolute top-[68%] transform -translate-y-1/2 left-3 text-black border-r-2 border-solid border-gray-400 pr-2"
              />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="pl-10 mt-1 p-2 w-full rounded-md border-1 border-solid border-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className="absolute top-[70%] bottom-1/2 right-0 transform translate-y-1/2 flex items-center pr-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {password &&
                  (showPassword ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  ))}
              </div>
            </div>
            {passwordError && (
              <p className="text-left text-red-500 text-sm pt-2">
                {PWD_VALIDATE}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="text-md font-bold text-gray-600 float-left"
            >
              Xác nhận mật khẩu
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faKey}
                className="absolute top-[68%] transform -translate-y-1/2 left-3 text-black border-r-2 border-solid border-gray-400 pr-2"
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="pl-10 mt-1 p-2 w-full rounded-md border-1 border-solid border-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nhập lại mật khẩu"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <div
                className="absolute top-[70%] bottom-1/2 right-0 transform translate-y-1/2 flex items-center pr-4 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {confirmPassword &&
                  (showConfirmPassword ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  ))}
              </div>
            </div>
            {confirmPasswordError && (
              <p className="text-left text-red-500 text-sm pt-2">
                {CONFIRM_PWD_VALIDATE}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 
            focus:outline-none focus:from-blue-600 focus:to-purple-700 focus:ring focus:border-blue-300 transform transition-transform duration-300 ease-in-out focus:scale-105"
          >
            Đăng ký
          </button>
        </form>
        <div className="text-sm text-center text-gray-600">
          <p>
            Bạn đã có tài khoản?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Register;
