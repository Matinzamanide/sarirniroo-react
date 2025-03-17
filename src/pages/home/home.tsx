import { useEffect, useState } from "react";
import Container from "../../components/container/container";
import { getservices } from "../../service/api";
import CardItem from "../../components/card-item/card-item";
import { IProduct } from "../../type/type";
import { Fade } from "react-awesome-reveal";
import CardSkeleton from "../../components/card-skeleton/card-skeleton";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true); // شروع لودینگ
    getservices()
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        setIsLoading(false); // بعد از دریافت داده‌ها مقدار لودینگ false بشه
      });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const customers = [
    { id: "1", image: "https://sarirniroo.ir/images/customers/bime.png" },
    { id: "2", image: "https://sarirniroo.ir/images/customers/irancell.jpg" },
    { id: "3", image: "https://sarirniroo.ir/images/customers/mci.png" },
    { id: "4", image: "https://sarirniroo.ir/images/customers/nirogah.jpg" },
    { id: "5", image: "https://sarirniroo.ir/images/customers/palayesh.jpg" },
    { id: "6", image: "https://sarirniroo.ir/images/customers/motocel.jpg" },
    { id: "7", image: "https://sarirniroo.ir/images/customers/3.jpg" },
    { id: "8", image: "https://sarirniroo.ir/images/customers/4.jpg" },
    { id: "9", image: "https://sarirniroo.ir/images/customers/sazman-fani.jpg" },
    { id: "10", image: "https://sarirniroo.ir/images/customers/daneshgah.png" },
  ];

  return (
    <>
      <Container>
        <div>
          <Fade>
            <div className="mx-auto bg-hero rounded-lg mt-20 p-10 lg:pr-16 bg-gray-600 bg-blend-multiply text-white bg-no-repeat bg-cover bg-center">
              <p className="text-lg md:text-2xl font-bold">
                سال‌هاست که همسفر صنعتیم ...
              </p>
              <p className="text-lg md:text-xl font-bold my-4">
                طراحی و تولید :
              </p>
              <ul className="font-semibold text-sm md:text-lg">
                <li className="my-6">انواع مختلف تابلوهای برق و الکترونیک صنعتی</li>
                <li className="my-6">تجهیزات سامانه‌های هوشمند حمل و نقل</li>
                <li className="my-6">سیستم‌های هوشمند مدیریت انرژی</li>
                <li className="my-6">تابلو برق و تجهیزات آموزشی</li>
                <li className="my-6">اتوماسیون خطوط تولید</li>
              </ul>
            </div>

          </Fade>

          <p className="text-2xl my-14 text-center">محصولات و خدمات</p>
          <Fade duration={700}>
            <div className="grid lg:grid-cols-4 gap-6">
              {isLoading
                ? [...Array(4)].map((_, i) => <CardSkeleton key={i} />) // نمایش چند اسکلتون در حال لود
                : products.map((item) => <CardItem {...item} key={item.id} />)}
            </div>
          </Fade>

          <p className="text-2xl my-20 text-center">برخی از مشتریان</p>
          <Fade>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-7">
              {customers.map((item) => (
                <img
                  src={item.image}
                  key={item.id}
                  className="w-40 rounded aspect-square"
                  alt=""
                />
              ))}
            </div>
          </Fade>
        </div>
      </Container>
    </>
  );
};

export default Home;
