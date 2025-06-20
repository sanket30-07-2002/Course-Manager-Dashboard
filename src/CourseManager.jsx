
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaGraduationCap } from "react-icons/fa";

// const API = "http://localhost:8080/courses";

// const CourseManager = () => {
//   const [courses, setCourses] = useState([]);
//   const [formData, setFormData] = useState({ id: "", title: "", description: "" });
//   const [isEditing, setIsEditing] = useState(false);
//   const [searchId, setSearchId] = useState("");

//   const fetchCourses = async () => {
//     try {
//       const res = await axios.get(API);
//       setCourses(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to fetch courses");
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await axios.put(`${"http://localhost:8080/courses"}/${formData.id}`, formData);
//         alert("✅ Course updated successfully");
//       } else {
//         await axios.post(API, formData);
//         alert("✅ Course added successfully");
//       }
//       setFormData({ id: "", title: "", description: "" });
//       setIsEditing(false);
//       fetchCourses();
//     } catch (err) {
//       console.error(err);
//       alert("❌ Operation failed");
//     }
//   };

//   const handleEdit = (course) => {
//     setFormData(course);
//     setIsEditing(true);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this course?")) {
//       await axios.delete(`${API}/${id}`);
//       fetchCourses();
//     }
//   };

//   const handleGetById = async () => {
//     if (!searchId) return;
//     try {
//       const res = await axios.get(`${API}/${searchId}`);
//       setCourses([res.data]);
//     } catch {
//       alert("❌ Course not found");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-6">
//       <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8 flex justify-center items-center gap-3">
//         <FaGraduationCap className="text-4xl" /> Course Management Dashboard
//       </h1>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white max-w-4xl mx-auto p-6 rounded-xl shadow-md border border-blue-200 mb-10"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//           <input
//             type="text"
//             name="id"
//             value={formData.id}
//             onChange={handleChange}
//             placeholder="Course ID"
//             required
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
//           />
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Course Title"
//             required
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
//           />
//           <input
//             type="text"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Course Description"
//             required
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-2 rounded font-semibold"
//         >
//           {isEditing ? "Update Course" : "Add Course"}
//         </button>
//       </form>

//       {/* Search Section */}
//       <div className="flex justify-center items-center gap-3 mb-6">
//         <input
//           type="text"
//           value={searchId}
//           onChange={(e) => setSearchId(e.target.value)}
//           placeholder="Search by ID"
//           className="border border-gray-300 px-4 py-2 rounded w-40"
//         />
//         <button
//           onClick={handleGetById}
//           className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-medium"
//         >
//           Get By ID
//         </button>
//         <button
//           onClick={fetchCourses}
//           className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded font-medium"
//         >
//           Reset
//         </button>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto max-w-6xl mx-auto">
//         <table className="min-w-full bg-white rounded-xl shadow border">
//           <thead>
//             <tr className="bg-indigo-100 text-indigo-800 text-left">
//               <th className="p-3 border">ID</th>
//               <th className="p-3 border">Title</th>
//               <th className="p-3 border">Description</th>
//               <th className="p-3 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courses.length > 0 ? (
//               courses.map((course) => (
//                 <tr key={course.id} className="hover:bg-indigo-50">
//                   <td className="p-3 border">{course.id}</td>
//                   <td className="p-3 border">{course.title}</td>
//                   <td className="p-3 border">{course.description}</td>
//                   <td className="p-3 border space-x-2">
//                     <button
//                       onClick={() => handleEdit(course)}
//                       className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(course.id)}
//                       className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center text-gray-500 p-4">
//                   No courses found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CourseManager;




import { useEffect, useState } from "react";
import axios from "axios";
import { FaGraduationCap } from "react-icons/fa";

const API = "http://localhost:8080/courses";

const CourseManager = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({ id: "", title: "", description: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [searchId, setSearchId] = useState("");

  const fetchCourses = async () => {
    try {
      const res = await axios.get(API);
      setCourses(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch courses");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`${API}/${formData.id}`, formData);
        alert("✅ Course updated successfully");
      } else {
        await axios.post(API, formData);
        alert("✅ Course added successfully");
      }
      setFormData({ id: "", title: "", description: "" });
      setIsEditing(false);
      fetchCourses();
    } catch (err) {
      console.error(err);
      alert("❌ Operation failed");
    }
  };

  const handleEdit = (course) => {
    setFormData(course);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      await axios.delete(`${API}/${id}`);
      fetchCourses();
    }
  };

  const handleGetById = async () => {
    if (!searchId) return;
    try {
      const res = await axios.get(`${API}/${searchId}`);
      setCourses([res.data]);
    } catch {
      alert("❌ Course not found");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 to-indigo-100 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-800 mb-10 flex items-center justify-center gap-4">
          <FaGraduationCap className="text-indigo-600" /> Course Manager
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-10 border border-indigo-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="Course ID"
              required
              className="input"
            />
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Course Title"
              required
              className="input"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Course Description"
              required
              className="input"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition-all duration-200"
          >
            {isEditing ? "Update Course" : "Add Course"}
          </button>
        </form>

        {/* Search */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="Search by ID"
            className="input w-40"
          />
          <button onClick={handleGetById} className="btn bg-purple-600 hover:bg-purple-700">
            Get By ID
          </button>
          <button onClick={fetchCourses} className="btn bg-gray-700 hover:bg-gray-800">
            Reset
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-indigo-200 text-indigo-800">
                <th className="px-4 py-3 border">ID</th>
                <th className="px-4 py-3 border">Title</th>
                <th className="px-4 py-3 border">Description</th>
                <th className="px-4 py-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.length > 0 ? (
                courses.map((course) => (
                  <tr key={course.id} className="hover:bg-indigo-50">
                    <td className="px-4 py-3 border">{course.id}</td>
                    <td className="px-4 py-3 border">{course.title}</td>
                    <td className="px-4 py-3 border">{course.description}</td>
                    <td className="px-4 py-3 border space-x-2">
                      <button
                        onClick={() => handleEdit(course)}
                        className="btn bg-green-500 hover:bg-gray-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(course.id)}
                        className="btn bg-red-600 hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 p-4">
                    No courses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseManager;