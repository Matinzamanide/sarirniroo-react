import { ISampleWork } from "../../type/type";
import { appContext } from "../../context/app-context";
import { useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SampleCardItem: React.FC<ISampleWork> = ({
  id,
  imgName,
  title,
  date,
  condition,
}) => {
  const { mode, isLogin } = useContext(appContext);
  const navigate = useNavigate();

  const deleteHandler = () => {
    Swal.fire({
      title: "واقعا میخوای حذف کنی ?",
      text: "اگه حذف شه قابل برگشت نیست!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "آره, حذفش کن!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://sarirniroo.ir/sarir/sample-work.php?id=${id}`);
        Swal.fire({
          title: "موفق!",
          text: "با موفقیت حذف شد.",
          icon: "success",
        });
        navigate("/");
      }
    });
  };

  return (
    <div className="relative">
      <div
        className={`mx-3 mt-6 ${
          mode ? "shadow-customDark" : "shadow-xl"
        } flex flex-col overflow-hidden self-start rounded-lg text-surface shadow-secondary-1  sm:shrink-0 sm:grow sm:basis-0`}
      >
        <img className="aspect-square" src={imgName} alt="Palm Springs Road" />

        <div className="p-6">
          <h5 className="mb-2 text-lg font-medium leading-tight ">{title}</h5>
          <p className="my-6  text-gray-600">وضعیت : {condition}</p>
          <p className="my-6  text-gray-600">تاریخ : {date}</p>
        </div>
      </div>
      {isLogin && (
        <div className="">
          <button
            className="bg-red-700 text-white p-2 rounded absolute -top-4"
            onClick={deleteHandler}
          >
            حذف نمونه کار
          </button>
          <Link
            className="bg-[#a9e8e8] text-[#009899] p-2 rounded absolute -top-4 left-0"
            to={`/edit-sample-work/${id}`}
          >
            ویرایش
          </Link>
        </div>
      )}
    </div>
  );
};

export default SampleCardItem;
