import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { appContext } from "../../context/app-context";

const Login = () => {
  const { setIsLogin } = useContext(appContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const savedCondition = sessionStorage.getItem("condition");
    setIsLogin(savedCondition === "true");
  }, []);

  const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loginHandler = () => {
    if (
      form.email === "manzary.abbas@gmail.com" &&
      form.password === "123456"
    ) {
      Swal.fire({
        icon: "success",
        title: "ورود موفقیت‌آمیز",
        text: "به داشبورد خوش آمدید!",
      });
      sessionStorage.setItem("condition", "true");
      setIsLogin(true);
      navigate("/panel");
    } else {
      Swal.fire({
        icon: "error",
        title: "خطا در ورود",
        text: "ایمیل یا رمز عبور اشتباه است!",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-[#009899]">
          ورود به حساب
        </h2>

        <div className="p-2">
          <label className="font-medium text-gray-700">ایمیل:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={formHandler}
            className="border border-gray-300 w-full mt-2 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009899]"
          />
        </div>

        <div className="p-2">
          <label className="font-medium text-gray-700">رمز عبور:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={formHandler}
            className="border border-gray-300 w-full mt-2 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009899]"
          />
        </div>

        <button
          type="button"
          onClick={loginHandler}
          className="bg-[#009899] text-white px-4 py-2 mt-5 rounded-lg w-full hover:bg-[#007d7d] transition-all duration-300"
        >
          ورود
        </button>

        <div className="text-center mt-3">
          <a href="#" className="text-sm text-[#009899] hover:underline">
            رمز عبور را فراموش کرده‌اید؟
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
