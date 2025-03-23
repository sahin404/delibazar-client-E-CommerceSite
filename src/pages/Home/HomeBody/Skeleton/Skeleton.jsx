const Skeleton = () => {
    return (
        <div className=" p-6 rounded-md bg-white shadow-md">
            <div className="animate-pulse">
                {/* Product Image Skeleton */}
                <div className="w-[200px] lg:h-52 md:h-52 h-48 rounded-lg bg-gray-300 mb-6"></div>
                {/* Product Title Skeleton */}
                <div className="w-[210px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                {/* product heading skeleton */}
                <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                {/* Product Description Skeleton */}
                <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
            </div>
        </div>
    )
}

export default Skeleton