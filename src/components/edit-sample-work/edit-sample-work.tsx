import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const EditSampleWork = () => {
    const navigate=useNavigate();
    const [form, setForm] = useState({
        title: "",
        condition: "",
        date: "",
        imgName: "",
    });
    const params=useParams().id;
    console.log(params)
   

    useEffect(()=>{
        axios(`https://sarirniroo.ir/sarir/sample-work.php?id=${params}`).then(result=>setForm(result.data))
        // console.log(data)
    },[])
    const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const editArticleHandler = () => {
        axios.put(`https://sarirniroo.ir/sarir/sample-work.php?id=${params}`,form);
        Swal.fire({
            icon: "success",
            title: "مقاله با موفقیت تغییر کرد",
          });
          navigate('/sample-work');
      };


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
                <h2 className="text-lg font-semibold mb-4 text-center">ویرایش نمونه کار</h2>

                

                    <div  className="p-2">
                        <label className="font-medium text-gray-700">عنوان :</label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={formHandler}
                            className="border border-gray-300 w-full mt-2 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009899]"
                        />
                    </div>
                    <div  className="p-2">
                        <label className="font-medium text-gray-700">وضعیت :</label>
                        <input
                            type="text"
                            name="condition"
                            value={form.condition}
                            onChange={formHandler}
                            className="border border-gray-300 w-full mt-2 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009899]"
                        />
                    </div>
                    <div  className="p-2">
                        <label className="font-medium text-gray-700">تاریخ :</label>
                        <input
                            type="text"
                            name="date"
                            value={form.date}
                            onChange={formHandler}
                            className="border border-gray-300 w-full mt-2 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009899]"
                        />
                    </div>
                    <div  className="p-2">
                        <label className="font-medium text-gray-700">عکس :</label>
                        <input
                            type="text"
                            name="imgName"
                            value={form.imgName}
                            onChange={formHandler}
                            className="border border-gray-300 w-full mt-2 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009899]"
                        />
                    </div>
                <button type="button" onClick={editArticleHandler} className="bg-[#009899] text-white px-4 py-2 mt-5 rounded-lg w-full hover:bg-[#007d7d] transition-all duration-300">
                ویرایش نمونه کار
                </button>
            </form>
        </div>
    );
};

export default EditSampleWork;