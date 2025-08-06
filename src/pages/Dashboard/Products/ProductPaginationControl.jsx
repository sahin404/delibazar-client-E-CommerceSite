const ProductPaginationControl = ({page,setPage,totalPage}) => {
    return (
        <div className="flex justify-center my-10">
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 mx-1 rounded bg-gray-200"
            >
                Previous
            </button>

            {Array.from({ length: totalPage }, (_, i) => (
                <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-4 py-2 mx-1 rounded ${page === i + 1 ? 'bg-[#D1A054] text-white' : 'bg-gray-200'}`}
                >
                    {i + 1}
                </button>
            ))}

            <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPage}
                className="px-4 py-2 mx-1 rounded bg-gray-200"
            >
                Next
            </button>
        </div>

    )
}

export default ProductPaginationControl