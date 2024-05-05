import slider1 from "@/assets/slider1.png";
import Image from "../../../node_modules/next/image";

export default function Slider() {
  return (
    <div className="w-full flex justify-between gap-4 px-20 items-center">
      <div className="text-left w-1/2">
        <p className="italic text-secondary font-semibold text-xl mb-4">
          Best In Town
        </p>
        <div>
          <p className="italic text-primary font-bold text-5xl">
            ENJOY OUR CHICKEN <br />{" "}
            <span className="text-secondary">BURGER</span> FAST FOOD
          </p>
        </div>
      </div>
      <div className="h-72 w-1/2 flex gap-1 flex-wrap">
        {/* Image component'i */}
        <Image
          alt="food-order"
          src={slider1}
          className="rounded-full rotate-45 w-36 h-36"
        />

        <Image
          alt="food-order"
          src={slider1}
          className="rounded-full w-36 h-36"
        />

        <Image
          alt="food-order"
          src={slider1}
          className="-rotate-45 w-36 h-36 rounded-full"
        />
      </div>
    </div>
  );
}
