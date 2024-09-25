import Image from "next/image";
import img1 from "@/images/Product/Product1.png";
import img2 from "@/images/Product/Product2.png";
import img3 from "@/images/Product/product3.png";
import img4 from "@/images/Product/product4.png";
import { FaStar } from "react-icons/fa";

export default function Product1() {
    return (
        <div className="flex flex-col lg:flex-row h-auto lg:h-[100vh] py-5 w-full px-5 lg:px-10 gap-5">
            {/* Thumbnail Images */}
            <div className="flex lg:flex-col gap-2 lg:gap-6 justify-center lg:justify-start">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <Image src={img1} alt="" className="object-cover w-full h-full" />
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <Image src={img2} alt="" className="object-cover w-full h-full" />
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <Image src={img3} alt="" className="object-cover w-full h-full" />
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <Image src={img4} alt="" className="object-cover w-full h-full" />
                </div>
            </div>

            {/* Main Product Section */}
            <div className="flex flex-col lg:flex-row w-full gap-5">
                {/* Main Image */}
                <div className="w-full lg:w-2/4 h-[50vh] lg:h-[75vh]">
                    <Image src={img1} alt="" className="object-cover w-full h-full" />
                </div>

                {/* Product Details */}
                <div className="flex flex-col gap-5 w-full lg:w-2/4">
                    <div className="flex flex-col gap-3">
                        <p className="text-sm lg:text-base">Home/Best Seller/Women Selection</p>
                        <p className="text-xl lg:text-3xl font-bold">Organic Cotton Classic Dress</p>
                        <p className="text-lg lg:text-2xl">$321</p>
                        <div className="flex items-center gap-1">
                            <FaStar /><FaStar /><FaStar /><FaStar />
                            <div className="flex gap-2">
                                <p>4.8</p>
                                <p>|</p>
                                <p>574 Reviews</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>Essentials</p>
                            <div className="flex space-x-2">
                                <div className="rounded-full w-4 h-4 bg-color1"></div>
                                <div className="rounded-full w-4 h-4 bg-color2"></div>
                                <div className="rounded-full w-4 h-4 bg-color3"></div>
                                <div className="rounded-full w-4 h-4 bg-color4"></div>
                                <div className="rounded-full w-4 h-4 bg-color5"></div>
                                <div className="rounded-full w-4 h-4 bg-color1"></div>
                                <div className="rounded-full w-4 h-4 bg-color2"></div>
                                <div className="rounded-full w-4 h-4 bg-color3"></div>
                                <div className="rounded-full w-4 h-4 bg-color4"></div>
                                <div className="rounded-full w-4 h-4 bg-color5"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>Limited</p>
                            <div className="rounded-full w-4 h-4 bg-color1"></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>Select Size:</p>
                            <div className="flex space-x-2 font-bold">
                                <div className="w-12 h-12 border rounded-md flex items-center justify-center">
                                    <span className="text-lg">xs</span>
                                </div>
                                <div className="w-12 h-12 border rounded-md flex items-center justify-center">
                                    <span className="text-lg">s</span>
                                </div>
                                <div className="w-12 h-12 border rounded-md flex items-center justify-center">
                                    <span className="text-lg">m</span>
                                </div>
                                <div className="w-12 h-12 border rounded-md flex items-center justify-center">
                                    <span className="text-lg">l</span>
                                </div>
                                <div className="w-12 h-12 border rounded-md flex items-center justify-center">
                                    <span className="text-lg">xl</span>
                                </div>
                                <div className="w-12 h-12 border rounded-md flex items-center justify-center">
                                    <span className="text-lg">2x</span>
                                </div>
                                <div className="w-12 h-12 border rounded-md flex items-center justify-center">
                                    <span className="text-lg">3x</span>
                                </div>
                            </div>
                            <p>Model 1 is 6 feet and wears size S</p>
                        </div>
                        <hr className="w-full border"></hr>
                        <div className="flex lg:px-[150px]">
                            <button className="bg-color1 text-white p-3 rounded-3xl w-full">Add to Cart</button>
                        </div>
                        <div className="flex bg-color5 p-3 text-center justify-center items-center gap-10">
                            <p>Free Shipping on Orders $150+</p>
                            <p>Easy 30-Day Return &
                                Exchanges</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
