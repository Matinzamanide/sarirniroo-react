import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Container from "../../components/container/container";
import { useContext, useEffect, useState } from "react";
import { getItems, getProjects } from "../../service/api";
import { IProduct, IProject } from "../../type/type";
import { appContext } from "../../context/app-context";
import axios from "axios";
import Swal from "sweetalert2";

const Card = () => {
  const params = useParams().cardId;
  const [items, setItems] = useState<IProduct>();
  const [projects, setProjects] = useState<IProject[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const result = await getItems(`${params}`);
        setItems(result);
      } catch (error) {
        console.log("failed to fetch :", error);
      }
    };
    const fetchProjects = async () => {
      try {
        const result1 = await getProjects();
        setProjects(result1);
      } catch (error) {
        console.log("failed to fetch :", error);
      }
    };
    fetchService();
    fetchProjects();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  console.log(projects);

  const recipientEmail = "sarirniroo2016@gmail.com";
  const subject = "درخواست اطلاعات";
  const body = "سلام، لطفا اطلاعات بیشتری ارسال کنید.";

  const handleClick = () => {
    window.location.href = ` mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  const { mode } = useContext(appContext);
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
        axios.delete(`https://sarirniroo.ir/sarir/cards.php?id=${params}`);
        Swal.fire({
          title: "موفق!",
          text: "با موفقیت حذف شد.",
          icon: "success",
        });
        navigate("/");
      }
    });
  };
  const { isLogin } = useContext(appContext);
  return (
    <div className="min-h-screen">
      {location.pathname !== "/card/3" ? (
        <Container>
          <div className="">
            {isLogin && (
              <div className="mt-10">
                <button
                  className="bg-red-200 text-red-700 px-5 py-1 rounded"
                  onClick={deleteHandler}
                >
                  حذف
                </button>
                <Link
                  to={`/edit-card/${items?.id}`}
                  className="mx-3 bg-[#beeaea] text-[#009899] px-5 py-1 rounded"
                >
                  ویرایش
                </Link>
              </div>
            )}

            <h1 className="text-xl lg:text-3xl mt-10">{items?.title}</h1>
            <img
              src={items?.image2}
              className="h-[200px] lg:h-[500px] w-full  rounded-xl mx-auto my-14"
              alt=""
            />
            <p>{items?.text}</p>

            <section className="container mx-auto px-4 py-8">
              <h2 className="text-2xl font-semibold text-center mb-6">
                سوابق اجرایی
              </h2>
              <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border">
                  <thead className="bg-blue-500 text-white">
                    <tr>
                      <th className="px-4 py-2">ردیف</th>
                      <th className="px-4 py-2">شرح فعالیت</th>
                      <th className="px-4 py-2">طرف قرارداد</th>
                      <th className="px-4 py-2">تاریخ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items?.projects.map((project) => (
                      <tr
                        key={project.id}
                        className="odd:bg-gray-200 even:bg-white text-center text-black"
                      >
                        <td className="px-4 py-2">{project.id}</td>
                        <td className="px-4 py-2">{project.title}</td>
                        <td className="px-4 py-2">{project.client}</td>
                        <td className="px-4 py-2">{project.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="container mx-auto px-4 py-8">
              <h2 className="text-2xl font-semibold text-center mb-6">
                خدمات ما
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items?.projects.map((project) => (
                  <div
                    key={project.id}
                    className={`p-4 rounded-lg ${
                      mode ? "shadow-customDark" : "shadow-lg"
                    }  hover:shadow-2xl transition`}
                  >
                    <h3 className="text-xl font-bold  text-blue-600 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-700">
                      طرف قرارداد: {project.client}
                    </p>
                    <p className="text-gray-600 mt-2">
                      تاریخ اتمام: {project.year}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Container>
      ) : (
        projects.map((item) => {
          return (
            <div className="min-h-screen flex items-center justify-center p-6">
              <div
                className={`  ${
                  mode ? "shadow-customDark" : "shadow-2xl"
                } rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-5xl`}
              >
                <div className="md:w-1/3 flex items-center justify-center bg-blue-100 p-4">
                  <img
                    src={item.image}
                    alt="خانه هوشمند"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>

                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <h1
                      className={`text-xl lg:text-3xl font-extrabold${
                        mode ? "text-white " : "text-gray-800"
                      }  mb-4`}
                    >
                      {item.title}
                    </h1>
                    <p className=" mb-6">
                      <strong>درخواست دهنده:</strong> {item.client}
                    </p>

                    <ul className="space-y-3 ">
                      {item.features.map((feature) => {
                        return <li key={item.id}> ✅ {feature}</li>;
                      })}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <a
                      onClick={handleClick}
                      className="inline-block bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
                    >
                      دانلود کاتالوگ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Card;
