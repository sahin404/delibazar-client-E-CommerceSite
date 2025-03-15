import { useEffect, useState } from 'react';
import img1 from '../../../assets/banner/1.jpg';
import img2 from '../../../assets/banner/2.jpg';
import img3 from '../../../assets/banner/3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev === 2 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='px-5 py-3'>
            <div className=" rounded-lg w-full mx-auto overflow-hidden relative h-60">
                <div className=" rounded-lg flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${index * 100}%)`, width: "100%" }}>
                    <img src={img2} alt="Slide 1" className=" rounded-lg w-full h-full object-cover flex-shrink-0" />
                    <img src={img3} alt="Slide 2" className=" rounded-lg w-full h-full object-cover flex-shrink-0" />
                    <img src={img1} alt="Slide 3" className=" rounded-lg w-full h-full object-cover flex-shrink-0" />
                    {/* <img src="https://ibb.co.com/LXjz2x0S" alt="Slide 3" className=" rounded-lg w-full h-full object-cover flex-shrink-0" /> */}
                    
                </div>
            </div>

        </div>


    );
};

export default Banner;
