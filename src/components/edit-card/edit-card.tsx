import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const EditProject = () => {
    const [form, setForm] = useState({
        title: "",
        text: "",
        info: "",
        image: "",
        image2: "",
        projects: [{ id: Date.now(), title: "", client: "", year: "" }],
    });
    const projectId=useParams().id;
    console.log(projectId)
    // دریافت اطلاعات پروژه از سرور
    useEffect(() => {
        axios.get(`https://sarirniroo.ir/sarir/cards.php?id=${projectId}`)
            .then((response) => {
                setForm(response.data);
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "خطا در دریافت اطلاعات پروژه",
                    text: "لطفاً دوباره تلاش کنید."
                });
            });
    }, [projectId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleProjectChange = (index: number, field: string, value: string) => {
        const updatedProjects = [...form.projects];
        updatedProjects[index] = { ...updatedProjects[index], [field]: value };
        setForm({ ...form, projects: updatedProjects });
    };

    const addProject = () => {
        setForm({
            ...form,
            projects: [...form.projects, { id: Date.now(), title: "", client: "", year: "" }],
        });
    };

    const removeProject = (id: number) => {
        setForm({ ...form, projects: form.projects.filter((project) => project.id !== id) });
    };

    const submitHandler = async () => {
        try {
            await axios.put(`https://sarirniroo.ir/sarir/cards.php?id=${projectId}`, form);
            Swal.fire({
                icon: "success",
                title: "پروژه با موفقیت ویرایش شد",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "خطا در ویرایش پروژه",
                text: "لطفاً دوباره تلاش کنید",
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
                <h2 className="text-lg font-semibold text-center mb-4">ویرایش پروژه</h2>

                {["title", "text", "info", "image", "image2"].map((field, index) => (
                    <div key={index} className="mb-4">
                        <label className="font-medium text-gray-700">{field} :</label>
                        <input
                            type="text"
                            name={field}
                            value={(form[field as keyof typeof form]as string)??""}
                            onChange={handleChange}
                            className="border w-full mt-2 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009899]"
                            placeholder="وارد کنید ..."
                        />
                    </div>
                ))}

                <h3 className="font-semibold mt-4 mb-2">پروژه‌ها</h3>
                {form.projects.map((project, index) => (
                    <div key={project.id} className="border p-2 rounded-md mb-2">
                        <input
                            type="text"
                            placeholder="عنوان پروژه"
                            value={project.title}
                            onChange={(e) => handleProjectChange(index, "title", e.target.value)}
                            className="border w-full px-3 py-1 rounded-md mb-1"
                        />
                        <input
                            type="text"placeholder="نام مشتری"
                            value={project.client}
                            onChange={(e) => handleProjectChange(index, "client", e.target.value)}
                            className="border w-full px-3 py-1 rounded-md mb-1"
                        />
                        <input
                            type="text"
                            placeholder="سال"
                            value={project.year}
                            onChange={(e) => handleProjectChange(index, "year", e.target.value)}
                            className="border w-full px-3 py-1 rounded-md mb-1"
                        />
                        <button onClick={() => removeProject(project.id)} className="text-red-500 text-sm">
                            حذف پروژه
                        </button>
                    </div>
                ))}
                <button onClick={addProject} className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2">
                    افزودن پروژه جدید
                </button>

                <button onClick={submitHandler} className="bg-[#009899] text-white px-4 py-2 mt-5 rounded-lg w-full">
                    ویرایش پروژه
                </button>
            </div>
        </div>
    );
};

export default EditProject;