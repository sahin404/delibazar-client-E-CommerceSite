import { CiFacebook, CiYoutube } from "react-icons/ci"
import { FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>

      <footer className="bg-[#233A95]">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-12 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between md:gap-20 lg:gap-36 items-center">
            {/* Left Side */}
            <div className="w-1/3">
              <div className="">
                <img src="logo2.png" alt="" />
              </div>

              <p className="mt-4 text-white">
                ডেলিবাজার - ঝামেলা নয়, বাজার এখন দোরগোড়ায়!
              </p>
              <div className="text-white flex gap-4 mt-5 text-3xl">
                {/* Todo: Set the real Link */}
                <Link to="#"> <CiFacebook /></Link>
                <Link to="#"> <FaInstagram /></Link>
                {/* <Link to="#"> <FaXTwitter /></Link> */}
                <Link to="#"> <CiYoutube /></Link>
              </div>

            </div>

            {/* right side */}
            <div className="flex flex-col mt-10 md:mt-0 md:flex-row justify-between gap-10 flex-1">
              <div>
                <p className="font-medium text-white">সেবা</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link to="#" className="text-white transition hover:opacity-75">
                      একক পরামর্শ
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white transition hover:opacity-75">
                      পণ্য পর্যালোচনা
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white transition hover:opacity-75">
                      অর্ডার সংক্রান্ত সহায়তা
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white transition hover:opacity-75">
                      গ্রাহক সহায়তা
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white transition hover:opacity-75">
                      ডেলিভারি ও রিটার্ন
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white">প্রতিষ্ঠান</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link to="#" className="text-white transition hover:opacity-75">
                      সম্পর্কে জানুন
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white transition hover:opacity-75">
                      আমাদের টিম
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white transition hover:opacity-75">
                      গ্রাহক অভিজ্ঞতা
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white">সহায়ক লিঙ্ক</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link to="#" className="text-white transition hover:opacity-75">
                      যোগাযোগ করুন
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white transition hover:opacity-75">
                      সাধারণ প্রশ্নসমূহ
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white transition hover:opacity-75">
                      লাইভ চ্যাট
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white">আইনগত</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link to="#" className="text-white transition hover:opacity-75">
                      প্রবেশগম্যতা নীতি
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white transition hover:opacity-75">
                      রিটার্ন নীতি
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white transition hover:opacity-75">
                      ফেরত নীতি
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white transition hover:opacity-75">
                      চাকরির সুযোগ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>


          </div>

          <p className="text-xs text-center md:text-left text-white/40">
            &copy; 2025. DeliBazar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer