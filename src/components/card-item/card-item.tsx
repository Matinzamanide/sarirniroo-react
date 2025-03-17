import { FaLongArrowAltLeft } from "react-icons/fa";
import "../../App.css";
import { Link } from "react-router-dom";
import { IProduct } from "../../type/type";
import { appContext } from "../../context/app-context";
import { useContext } from "react";

const CardItem: React.FC<IProduct> = ({ id, image, title, info }) => {
  const { mode } = useContext(appContext);

  return (
    <div className="responsive ">
      <div className={`cardStyle ${!mode ? "shadow-xl" : "shadow-customDark"}`}>
        <a href="">
          <img
            className="aspect-square w-full"
            src={image}
            alt={image}
            loading="lazy"
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-lg font-medium leading-tight ">{title}</h5>
          <p className="my-6 text-[12px] text-gray-600">{info}</p>
          <Link to={`/card/${id}`} className="buttonCard">
            <p>بیشتر</p>
            <FaLongArrowAltLeft
              className="mr-1 hover:-translate-x-3 duration-200"
              size="23"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
