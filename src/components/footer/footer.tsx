import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { getCompany } from "../../service/api";

const Footer = () => {
  const [info,setInfo]=useState({
    Telephone:"",
    Email:"",
    Address:"",
  });
  useEffect(()=>{
    getCompany().then(setInfo);
  },[])
  return (
    <footer className="relative bg-[#009899] text-white mt-16 py-7">
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">شرکت سریر نیروی سپاهان</h2>
          <p className="text-sm opacity-80">
            ارائه دهنده خدمات با کیفیت و پشتیبانی برتر برای شما
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">پل‌های ارتباطی</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <FaPhone />
              <span>
                تلفن: <span>{info.Telephone}</span>
              </span>
            </li>
            <li className="flex items-center">
              <IoPhonePortraitOutline />

              <span>همراه: 09133650445</span>
            </li>
            <li className="flex items-center">
              <MdOutlineAlternateEmail />

              <span>ایمیل: <span>{info.Email}</span></span>
            </li>
          </ul>
        </div>

        {/* بخش آدرس */}
        <div>
          <h3 className="text-xl font-semibold mb-4">آدرس</h3>
          {/* <ul className="space-y-2">
            <li className="flex items-center">
              <span>ایران، استان اصفهان، شهر اصفهان</span>
            </li>
            <li className="flex items-center">
              <span>خیابان آل محمد، بلوار ایمان، پلاک 6، طبقه 1</span>
            </li>
          </ul> */}
          <p className="pl-10 leading-9">{info.Address}</p>
        </div>
      </div>

      {/* بخش کپی‌رایت */}
      <div className="text-center text-sm opacity-80 mt-8">
        © 2024 شرکت سریر نیروی سپاهان. تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
