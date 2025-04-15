import { useFormik } from "formik";
import { useContext, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosPublic/useAxiosSecure";

const SignUp = () => {
  const { signUp, logOut, updatePro } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    else if (values.name.length < 3) {
      errors.name = "Your Name Must Be Minimum 3 Characters"
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'Your Password Must Be Minimum 6 Characters.';
    } else if (!/\d/.test(values.password)) {
      errors.password = 'Your Password Must Contain At Least One Number.';
    } else if (!/[a-zA-Z]/.test(values.password)) {
      errors.password = 'Your Password Must Contain At Least One Letter.';
    }


    return errors;

  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: ''
    },
    validate,
    onSubmit: values => {
      setError("");
      signUp(values.email, values.password)
        .then(async (res) => {
          await updatePro(values.name)
          await axiosSecure.post('/users', {
            name: values.name,
            email: res.user.email,
            date: res.user.metadata.creationTime
          })
            .then(() => {

            })
            .catch(() => {
              console.log('error occured');
            })
          await logOut();
          navigate('/login');
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Account has been ceate succesfully!",
            showConfirmButton: false,
            timer: 1000
          });


        })
        .catch(() => {
          setError("An Error Occured. Please Try Again!");
        })
    },

  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100 p-4 relative">

      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm opacity-80"
        style={{
          backgroundImage: "url('/img1.png')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      {/* Return Button */}
      <Link to="/">
        <button className="absolute left-fullabsolute top-5 left-5 bg-white bg-opacity-80 text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-opacity-100 transition-all bg-white p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <IoArrowBackCircleOutline />
            <p>পূর্বের পৃষ্ঠায় ফিরে যান</p>
          </div>
        </button>
      </Link>

      {/* Login Form */}
      <form onSubmit={formik.handleSubmit} className="bg-white p-6 rounded-2xl shadow-md w-[80%] max-w-md relative z-10">
        <div className="text-center mb-7 pt-4">
          <span className="text-2xl font-semibold">
            নতুন একাউন্ট খুলুন
          </span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">নাম</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded-md mt-1"
            placeholder="আপনার নাম দিন"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? <div className="text-red-600 text-sm">{formik.errors.name}</div> : null}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ইমেইল</label>
          <input
            type="text"
            name="email"
            className="w-full p-2 border rounded-md mt-1"
            placeholder="আপনার ইমেইল দিন"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <div className="text-red-600 text-sm">{formik.errors.email}</div> : null}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">পাসওয়ার্ড</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded-md mt-1"
            placeholder="********"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? <div className="text-red-600 text-sm">{formik.errors.password}</div> : null}
        </div>

        <button type="submit" className="w-full bg-[#233A95] text-white p-2 rounded-md font-semibold hover:bg-[#101b44] mt-4 duration-200">
          রেজিষ্টার
        </button>
        <div>{
          error ? <div className="text-sm mt-3 text-red-600 text-center">{error}</div> : null
        }</div>
        <div className="flex items-center justify-center mt-4">
          <p>ইতোমধ্যে একাউন্ট আছে? <Link to="/login" className="text-blue-600 hover:underline">লগইন</Link> করুন</p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
