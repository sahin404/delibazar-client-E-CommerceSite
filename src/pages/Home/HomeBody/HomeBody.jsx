import { useState } from "react";
import LeftHomeBody from "./LeftHomeBody";
import RightHomeBody from "./RightHomeBody";

const HomeBody = () => {
    const [selected, setSelected] = useState("ডিফল্ট");
    const [category, setCategory] = useState("");

    const options = [
      "ডিফল্ট",
      "মূল্য উচ্চমুখী",
      "মূল্য নিম্নমুখী",
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-4">
                {/* Left Side */}
                <div className="col-span-1 border border-t-0">
                    <div className="bg-[#F3F4F7] flex justify-center items-center h-10 py-8 border mb-2">
                        প্রোডাক্ট ক্যাটাগরি
                    </div>
                    <LeftHomeBody setCategory={setCategory}></LeftHomeBody>
                </div>

                {/* Right Side */}
                <div className="border col-span-3 border-t-0 border-l-0">
                    <div className="bg-[#F3F4F7] flex justify-start pl-5 items-center h-10 py-8 border mb-2 w-full">
                        <div className="flex gap-2 items-center w-full">
                            <h1>ক্রমানুসার: </h1>

                            {/* Buttons for large devices */}
                            <div className="hidden md:flex gap-2">
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        className={`px-3 py-1 border rounded ${selected === option ? "bg-red-500 text-white" : "bg-white"
                                            }`}
                                        onClick={() => setSelected(option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>

                            {/* Dropdown for small devices */}
                            <select
                                className="md:hidden border px-3 py-1 rounded w-full"
                                value={selected}
                                onChange={(e) => setSelected(e.target.value)}
                            >
                                {options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <RightHomeBody category={category} filter={selected}></RightHomeBody>
                </div>
            </div>
        </div>
    );
};

export default HomeBody;
