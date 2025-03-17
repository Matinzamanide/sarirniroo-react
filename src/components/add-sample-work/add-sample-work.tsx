import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const AddSampleWork = () => {
    const [form, setForm] = useState({
        title: "",
        condition: "",
        date: "",
        imgName: "",
    });

    const resetData = () => {
        setForm({
            title: "",
            condition: "",
            date: "",
            imgName: "",
        });
    };

    const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const addHandler = async () => {
        // بررسی اینکه هیچ فیلدی خالی نباشه
        if (!form.title || !form.condition || !form.date || !form.imgName) {
            Swal.fire({
                icon: "warning",
                title: "لطفاً تمام فیلدها را پر کنید",
                confirmButtonText: "باشه",
            });
            return;
        }

        try {
            const response = await axios.post("https://sarirniroo.ir/sarir/sample-work.php", form);

            if (response.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "نمونه کار با موفقیت اضافه شد",
                    showConfirmButton: false,
                    timer: 1500,
                });
                resetData();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "مشکلی پیش آمده، دوباره امتحان کنید",
                }); 
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "خطایی رخ داد",
                text: "مشکلی در ارسال اطلاعات وجود دارد",
            });
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
                <h2 className="text-lg font-semibold mb-4 text-center">افزودن نمونه کار</h2>

                {["title", "condition", "date", "imgName"].map((field, index) => (
                    <div key={index} className="p-2">
                        <label className="font-medium text-gray-700">{field === "title" ? "عنوان" : field === "condition" ? "وضعیت" : field === "date" ? "تاریخ" : "عکس"} :</label>
                        <input
                            type="text"
                            name={field}
                            value={form[field as keyof typeof form]}
                            onChange={formHandler}
                            className="border border-gray-300 w-full mt-2 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009899]"
                            placeholder={`لطفاً ${field === "title" ? "عنوان نمونه کار" : field === "condition" ? "وضعیت پروژه" : field === "date" ? "تاریخ پروژه" : "آدرس عکس"} را وارد کنید...`}
                        />
                    </div>
                ))}

                <button type="button" onClick={addHandler} className="bg-[#009899] text-white px-4 py-2 mt-5 rounded-lg w-full hover:bg-[#007d7d] transition-all duration-300">
                    اضافه کردن نمونه کار
                </button>
            </form>
        </div>
    );
};

export default AddSampleWork;