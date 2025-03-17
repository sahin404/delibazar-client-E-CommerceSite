import { Link } from "react-router-dom";

const Login = () => {
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

            {/* Login Form */}
            <div className="bg-white p-6 rounded-2xl shadow-md w-[80%] max-w-md relative z-10">
                <div className="text-center mb-7 pt-4">
                    <span className="text-2xl font-semibold">
                        একাউন্টে প্রবেশ করুন
                    </span>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">ইমেইল</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded-md mt-1"
                        placeholder="আপনার ইমেইল দিন"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">পাসওয়ার্ড</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded-md mt-1"
                        placeholder="********"
                    />
                </div>
                <div className="flex items-center text-sm underline">
                    {/* To do: functionlity */}
                    <p>পাসওয়ার্ড ভুলে গেছেন? </p>
                </div>
                <button className="w-full bg-green-600 text-white p-2 rounded-md font-semibold hover:bg-green-700 mt-4">
                    লগইন
                </button>
                <div className="flex items-center justify-center mt-4">
                    <p>এই ওয়েবসাইটে নতুন? <Link to="/register" className="text-blue-600 hover:underline">রেজিষ্টার</Link> করুন</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
