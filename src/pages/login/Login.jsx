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

            {/* Login Form */}
            <div className="bg-white p-6 rounded-2xl shadow-md w-[80%] max-w-md relative z-10">
                <div className="text-center">
                    <span className="h-10">
                        <img src="/logo.png" alt="" />
                    </span>
                    <p className="text-gray-600">iOrtin Mleata, & One</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Purchasing Route</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded-md mt-1"
                        placeholder="Groceries"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Security Holis</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded-md mt-1"
                        placeholder="********"
                    />
                </div>
                <div className="flex items-center mb-4">
                    <input type="checkbox" id="carocars" className="mr-2" />
                    <label htmlFor="carocars" className="text-gray-700">Carocars</label>
                </div>
                <button className="w-full bg-green-600 text-white p-2 rounded-md font-semibold hover:bg-green-700">
                    Login
                </button>
                <div className="flex items-center mt-4">
                    <input type="checkbox" id="policy" className="mr-2" />
                    <label htmlFor="policy" className="text-gray-700 text-sm">
                        Rue bruey Plial schnda
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Login;
