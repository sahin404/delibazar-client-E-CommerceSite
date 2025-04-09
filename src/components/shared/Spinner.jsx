const Spinner = () => (
    <div className="flex justify-center items-center space-x-2">
      <div className="w-6 h-6 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-[#D1A054]"></div>
      <span className="text-lg text-[#D1A054]">Loading...</span>
    </div>
  )
  
export default Spinner;