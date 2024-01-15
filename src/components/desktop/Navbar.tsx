import Image from "next/image";
import logo from "@/assets/logo.jpg";

export default function Navbar() {
  return (
    <div className="flex justify-between gap-4 items-center px-40 py-4">
      <div className="min-w-16 min-h-16">
        <Image alt="food-order" src={logo} />
      </div>
      <div className="flex justify-center gap-8 cursor-pointer text-[#2A435D] font-bold text-lg ml-32">
        <span>HOME</span>
        <span>ABOUT</span>
        <span>ITEMS</span>
        <span>PAGES</span>
        <span>CONTACT</span>
      </div>
      <div className="hidden xl:flex items-center gap-6 ">
        {/* cart */}
        <div className="min-w-16 min-h-16 flex justify-center bg-[#2A435D] text-[#FFF8EE] rounded-full cursor-pointer">
          <div className="flex flex-col items-center">
            <span className="font-bold">2</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <path
                d="M10.5 28C8.575 28 7.0175 29.575 7.0175 31.5C7.0175 33.425 8.575 35 10.5 35C12.425 35 14 33.425 14 31.5C14 29.575 12.425 28 10.5 28ZM0 0V3.5H3.5L9.8 16.7825L7.4375 21.07C7.1575 21.56 7 22.1375 7 22.75C7 24.675 8.575 26.25 10.5 26.25H31.5V22.75H11.235C10.99 22.75 10.7975 22.5575 10.7975 22.3125L10.85 22.1025L12.425 19.25H25.4625C26.775 19.25 27.93 18.5325 28.525 17.4475L34.79 6.09C34.93 5.845 35 5.5475 35 5.25C35 4.2875 34.2125 3.5 33.25 3.5H7.3675L5.7225 0H0ZM28 28C26.075 28 24.5175 29.575 24.5175 31.5C24.5175 33.425 26.075 35 28 35C29.925 35 31.5 33.425 31.5 31.5C31.5 29.575 29.925 28 28 28Z"
                fill="#FFF8EE"
              />
            </svg>
          </div>
        </div>
        <div className="flex gap-3 cursor-pointer">
          <div className="text-center">
            <p className="font-bold">Delivery Order</p>
            <p>+880 1630 225 015</p>
          </div>
        </div>
        <div>
          <button className="bg-[#CC3333] text-[#FFF8EE] px-4 py-2 rounded-md uppercase font-bold hover:bg-opacity-80 transition duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
