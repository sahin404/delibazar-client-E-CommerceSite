const AddProductModal = ({ isModalOpen, setIsModalOpen }) => {
    if(!isModalOpen){
        return null;
    }
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg p-6 w-80">
                    <button
                        className="text-gray-500 float-right text-xl font-bold"
                        onClick={()=>setIsModalOpen(false)}
                    >
                        &times;
                    </button>
                    <p className="mt-4 text-center">This is a modal popup!</p>
                </div>
            </div>
        </div>
    )
}

export default AddProductModal