import axios from "axios";
import { useContext, useEffect } from "react";
import { appContext } from "../../context/app-context";

const About = () => {
  useEffect(() => {
    axios("api/sarirniroo/projects.json").then((result) => console.log(result));
  });
  const { mode } = useContext(appContext);

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center mx-auto py-8">
        <div
          className={`w-[90%] flex flex-wrap items-center justify-center ${
            mode
              ? "shadow-customDark"
              : "shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          } rounded-lg p-6 md:flex-row flex-col mx-4`}
        >
          <div className="text flex-1 p-6  text-sm lg:text-lg leading-relaxed font-vazir">
            <p className="text-justify">
              شرکت سهامی خاص مهندسی سرير نيروی سپاهان نزد سازمان ثبت شركت های
              اصفهان به ثبت رسید.این شرکت طی سالها فعالیت خود از جمله پیشگامان
              حوزه تخصصی خود در استان اصفهان بوده و با اتکا به دانش، تخصص و
              تجربه کارشناسان و پرسنل خود توانسته است اجرای بیش از ۲۰۰ پروژه
              موفق را بر اساس آخرین دستاوردهای علمی و فنی روز در عرصه برق صنعتی،
              مخابرات و مکاترونیک در کارنامه خود به ثبت برساند.همچنین در بعد بین
              الملی نیز واحد بازرگانی شرکت با تکیه بر ارتباطات بین المللی خود
              توانسته است بسیاری از قطعات مورد نیاز در صنایع پالایشگاهی کشور را
              از کشور های مبدا(انگلستان و امریکا) به صورت مستقیم وارد نموده و در
              موارد نیاز نصب و آموزش را نیز ارائه کرده است.یکی دیگر از اقدامات
              این واحد اخذ نمایندگی فروش از شرکت های بزرگ بین المللی مانند
              Siemens آلمان است.شرکت سرير نيروی سپاهان همواره آمادگی دارد با
              سایر شرکت ها، ارگان ها و سازمان های خصوصی و دولتی در زمینه و حوزه
              تخصصی کاری خود همکاری و مشارکت داشته باشد.
            </p>
          </div>
          <div className="about-image flex-1 max-w-full md:max-w-[50%]">
            {/* <img
              src="https://s8.uupload.ir/files/about-us-concept_k47i.jpg"
              alt="about us"
              className="w-full h-auto object-contain"
            /> */}
            <iframe
              src="https://lottie.host/embed/a3d10b3e-5567-4940-beab-86f8c64bf3de/8BB0D9NtoE.lottie"
              className=" w-full lg:h-[500px]"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
