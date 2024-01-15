import Image from "next/image";
import slider1 from "@/assets/slider1.png";

export default function Slider() {
  return (
    <div className="w-full flex justify-between px-32 items-center">
      <div className="text-left">
        <p className="italic text-[#CC3333] font-semibold text-xl mb-4">
          Best In Town
        </p>
        <div>
          <p className="italic text-[#2A435D] font-bold text-5xl">
            ENJOY OUR CHICKEN <br />{" "}
            <span className="text-[#CC3333]">BURGER</span> FAST FOOD
          </p>
        </div>
      </div>
      <div className="flex-shrink-0 relative h-72 w-72">
        {/* Image component'i */}
        <div className="absolute h-96 w-96">
          <Image
            alt="food-order"
            src={slider1}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
}
