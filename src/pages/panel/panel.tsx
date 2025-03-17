import { useState } from "react";
import { Link } from "react-router-dom";
import AddSampleWork from "../../components/add-sample-work/add-sample-work";
import AddProject from "../../components/add-card/add-card";
import EditCompanyInfo from "../../components/edit-company-info/edit-company-info";

export default function Panel() {
 

  const [selectedPage, setSelectedPage] = useState("dashboard");
  const [isPagesOpen, setIsPagesOpen] = useState(false);


  return (
    <div className="min-h-screen bg-gray-50 flex transition-all duration-300 ease-in-out">
      {/* سایدبار */}
      <aside className="w-64 bg-[#298484] text-white p-5 shadow-lg">
        <h2 className="text-xl font-bold">پنل مدیریت</h2>
        <nav className="mt-5">
          <ul>
            <li className="py-2">
              <button
                onClick={() => setSelectedPage("dashboard")}
                className="w-full text-left hover:bg-primary-light rounded p-2 transition duration-200 ease-in-out"
              >
                داشبورد
              </button>
            </li>
            <li className="py-2">
              <button
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                className="w-full text-left flex justify-between items-center hover:bg-primary-light rounded p-2 transition duration-200 ease-in-out"
              >
                مدیریت صفحات
                <span className="transition-transform duration-300">{isPagesOpen ? "▲" : "▼"}</span>
              </button>
              {/* آکاردئون */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isPagesOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <ul className="mt-3">
                  
                  <Link className="block my-3 hover:bg-[#216a6a] px-3 py-2 rounded-md" onClick={()=>setSelectedPage("addCard")} to="">صفحه ی اصلی</Link>
                  <Link className="block my-3 hover:bg-[#216a6a] px-3 py-2 rounded-md" onClick={()=>setSelectedPage('sample')} to="">نمونه کار ها</Link>
                  <Link className="block my-3 hover:bg-[#216a6a] px-3 py-2 rounded-md" onClick={()=>setSelectedPage("editInfo")} to="">پاورقی</Link>
                  <Link className="block my-3 hover:bg-[#216a6a] px-3 py-2 rounded-md" onClick={()=>setSelectedPage("editCard")} to="">پاورقی</Link>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </aside>

      {/* محتوای اصلی */}
      <main className="flex-1 p-6">
        {selectedPage === "dashboard" && (
          <>
            <h1 className="text-2xl font-semibold text-gray-800">داشبورد</h1>
            <p className="mt-2 text-gray-600">به پنل مدیریت خوش آمدید.</p>
          </>
        ) }
        {selectedPage=='sample' && <AddSampleWork/>}
        {/* {selectedPage=='mainPage' && <div><button className="mx-3 bg-[#beeaea] text-[#009899] px-5 py-1 rounded">ویرایش</button> <button className="mx-3 bg-[#beeaea] text-[#009899] px-5 py-1 rounded" onClick={()=>setSelectedPage("addCard")}>اضافه کردن</button></div>} */}
        {selectedPage=='editInfo' && <EditCompanyInfo/>}
        {selectedPage=='addCard' && <AddProject/>}
        {selectedPage=='editCard' && <EditCompanyInfo/>}
      </main>
    </div>
  );
}