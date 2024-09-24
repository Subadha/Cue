import img1 from "@/images/img5.png"
import img2 from "@/images/img6.png"
import img3 from "@/images/img7.png"
import img4 from "@/images/img8.png"
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"
export default function Home4(){
    return(
        <div className="flex flex-wrap justify-evenly items-center h-auto md:h-[50vh] sm:mb-[120px]">
            <div className="flex relative gap-5">
                <div className="">
                    <Image src={img1} alt="img" />
                </div>
                <div className="flex gap-5 flex-col absolute bottom-5 right-5 text-right">
                    <p className="text-white font-bold text-xl">ARCHIVE SALE</p>
                    <button className="text-center lg:w-[7vw] w-[25vw]  bg-white rounded-lg text-black px-4 py-2 font-bold flex items-center gap-2">
                        SHOP <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className="flex">
                <Image src={img2} alt="img" />
            </div>
            <div className="flex">
                <Image src={img3} alt="img" />
            </div>
            <div className="flex">
                <Image src={img4} alt="img" />
            </div>
        </div>
    )
}