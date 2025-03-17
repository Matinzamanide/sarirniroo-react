import { useEffect, useState } from "react";
import { getCompany } from "../../service/api";

const Contact = () => {
const [info,setInfo]=useState({
    Telephone:"",
    Email:"",
    Address:"",
  });
  useEffect(()=>{
    getCompany().then(setInfo);
  },[])
  return (
    <div className="">
     

      <div className="w-[80%] mx-auto flex items-center justify-between flex-col lg:flex-row">
        <div className="text-xl mt-10">
          <p className=" text-lg font-semibold lg:text-2xl py-4">
            پاسخگویی تلفنی (روزهای کاری ساعات 8 الی 17) :
          </p>
          <p className="py-2 ">تلفن ثابت : {info.Telephone}</p>
          <p className="py-2">فکس : {info.Telephone}</p>
          <p className="py-2">همراه : 09133650445</p>
          <p>ایمیل : <span className="font-sans font-semibold">{info.Email}</span></p>
        </div>

        {/* <img
          src="https://s8.uupload.ir/files/contact_2g17.png"
          className="w-[500px]"
          alt=""
          loading="lazy"
        /> */}
      <iframe src="https://lottie.host/embed/6aeeda89-831c-42af-9cda-698ae67d32ea/c7gb6qM2un.lottie" className=" w-full h-[300px] lg:w-[550px] lg:h-[600px]"></iframe>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499.0621569067703!2d51.68148481911393!3d32.705276211614645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc355cb2033071%3A0x533e63e0cb318696!2sIman%20blvd!5e0!3m2!1sde!2s!4v1721288390722!5m2!1sde!2s"
        width="600"
        height="450"  
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-[90%] mx-auto rounded-xl"
      ></iframe>

    </div>
  );
};

export default Contact;
