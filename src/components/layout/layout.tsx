import { useContext } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import ScrollProgressBar from "../scroll-progress-bar/scroll-progress-bar";
import { appContext } from "../../context/app-context";
interface ILayout {
  children: React.ReactNode;
}
const Layout: React.FC<ILayout> = ({ children }) => {
  const { mode } = useContext(appContext);
  return (
    <div
      className={`${
        !mode ? "bg-[#f5f5f7] text-black" : "bg-[#272727] text-white"
      } duration-300  min-h-screen`}
    >
      <ScrollProgressBar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
