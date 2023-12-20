import React, { useState } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as APIService from "../../services/APIService";
import { API_SERVICE, STATUS_CODE } from "../../utils/Constants";
import storageInstance from "../../services/Storage";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      toast.error("Tên đăng nhập không được để trống!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (password.trim() === "") {
      toast.error("Mật khẩu không được để trống!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const response = await APIService[API_SERVICE.USER_LOGIN]({
      username: username.trim(),
      password: password.trim(),
    });

    console.log(response);

    if (response?.token) {
      storageInstance.updateLocalFoodRecipeToken(response.token);
      navigate("/");
      toast.success("Đăng nhập thành công!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error(response?.data?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-md w-full p-8 bg-slate-200 shadow-lg rounded-md space-y-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Đăng nhập
        </h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="username"
              className="text-md font-bold text-gray-600 float-left"
            >
              Tên đăng nhập
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full rounded-md border-1 border-solid border-gray-400 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-md font-bold text-gray-600 float-left"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full rounded-md border-1 border-solid border-gray-400 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:from-blue-600 focus:to-purple-700"
            onClick={handleLogin}
          >
            Đăng nhập
          </button>
        </form>
        <div className="text-sm text-center text-gray-600">
          <p>
            Bạn chưa có tài khoản?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Login;
