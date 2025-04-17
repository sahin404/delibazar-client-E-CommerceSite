const LoadingPage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        {/* Spinner on top */}
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500 border-solid mb-10"></div>
  
        {/* Logo and brand name side by side */}
        <div className="flex items-center gap-1">
          {/* Logo */}
          <img
            src="/logo.png" // Replace with your actual logo path
            alt="DeliBazar Logo"
            className="w-24 h-16"
          />
  
          {/* Brand Name */}
          <h1 className="text-3xl font-bold text-red-500 tracking-widest">
            DeliBazar
          </h1>
        </div>
      </div>
    );
  };
  
  export default LoadingPage;
  