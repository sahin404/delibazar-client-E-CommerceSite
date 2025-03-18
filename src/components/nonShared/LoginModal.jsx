import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const LoginModal = () => {

    const [error, setError] = useState("");
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        else if (values.password.length < 6) {
            errors.password = 'Your Password is Minimum 6 Characters.'
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            setError("");
            signIn(values.email, values.password)
                .then(() => {
                    // console.log('Successfully Logged In');
                    navigate('/');
                })
                .catch(() => {
                    setError("Invalid Username or Password! Try Again");
                })
        },

    })

    return (
        <div className="bg-black fixed inset-0 bg-opacity-30 backdrop-blur-sm">
            <div className="min-h-screen flex items-center justify-center  p-4 relative">
                {/* Login Form */}
                <form onSubmit={formik.handleSubmit} className="bg-white p-6 rounded-2xl shadow-md w-[80%] max-w-md relative z-10">
                    <div className="text-center mb-7 pt-4">
                        <span className="text-2xl font-semibold">
                            একাউন্টে প্রবেশ করুন
                        </span>
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
                    <div className="flex items-center text-sm underline">
                        {/* To do: functionlity */}
                        <p>পাসওয়ার্ড ভুলে গেছেন? </p>
                    </div>
                    <button type="submit" className="w-full bg-[#233A95] text-white p-2 rounded-md font-semibold hover:bg-[#101b44] mt-4 duration-200">
                        লগইন
                    </button>
                    <div>
                        {error ? <div className="text-center text-sm text-red-600 mt-3">{error}</div> : null}
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <p>এই ওয়েবসাইটে নতুন? <Link to="/register" className="text-blue-600 hover:underline">রেজিষ্টার</Link> করুন</p>
                    </div>
                </form>
            </div>
        </div>

    );

}

export default LoginModal