import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const EditCompanyInfo = () => {
    const [company, setCompany] = useState({
        id: "1",
        Telephone: "",
        Email: "",
        Address: ""
    });

    // دریافت اطلاعات شرکت از سرور هنگام بارگذاری صفحه
    useEffect(() => {
        axios.get("https://sarirniroo.ir/sarir/info.php")
            .then((response) => {
                setCompany(response.data);
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "خطا در دریافت اطلاعات شرکت",
                    text: "لطفاً دوباره تلاش کنید."
                });
            });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCompany({ ...company, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.put('https://sarirniroo.ir/sarir/info.php', company);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "اطلاعات شرکت با موفقیت به‌روزرسانی شد",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "خطا در به‌روزرسانی اطلاعات",
                text: "لطفاً دوباره تلاش کنید.",
                showConfirmButton: true
            });
        }
    };
    useEffect(()=>{
        axios('https://sarirniroo.ir/sarir/info.php').then(result=>console.log(result.data))        
    },[])
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">ویرایش اطلاعات شرکت</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">تلفن:</label>
                    <input 
                        type="text" 
                        name="Telephone"
                        value={company.Telephone} 
                        onChange={handleChange}
                        className="border w-full mt-2 rounded px-4 py-2"
                        placeholder="شماره تلفن را وارد کنید..."
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">ایمیل:</label>
                    <input 
                        type="email" 
                        name="Email"
                        value={company.Email} 
                        onChange={handleChange}
                        className="border w-full mt-2 rounded px-4 py-2"
                        placeholder="ایمیل را وارد کنید..."
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">آدرس:</label>
                    <textarea 
                        name="Address"
                        value={company.Address} 
                        onChange={handleChange}
                        className="border w-full mt-2 rounded px-4 py-2 h-24"
                        placeholder="آدرس شرکت را وارد کنید..."
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    className="bg-[#009899] text-white px-4 py-2 mt-4 rounded hover:bg-[#007777] transition duration-200"
                >
                    ویرایش اطلاعات
                </button>
            </form>
        </div>
    );
};

export default EditCompanyInfo;

