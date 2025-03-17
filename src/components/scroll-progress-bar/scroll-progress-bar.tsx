import  { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;

    setScrollProgress(progress);

    // نمایش ProgressBar فقط وقتی اسکرول انجام شده باشد
    if (scrollTop > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 h-1 bg-[#00b3b3] shadow-custom transition-opacity duration-300 z-50 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ width: `${scrollProgress}%` }}
    ></div>
  );
};

export default ScrollProgressBar;