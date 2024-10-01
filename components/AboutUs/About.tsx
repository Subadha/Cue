import img1 from "@/images/About/about1.png";
//import img2 from "@/images/About/about2.png";
import img3 from "@/images/About/about3.png";
import img4 from "@/images/About/about4.png";
import img5 from "@/images/About/about5.png";
import img6 from "@/images/About/about6.png";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function About() {
    return (
        <div className="flex flex-col">
            <div className="flex w-full h-[85vh]">
                <div className="flex w-1/2 flex-col px-[50px] gap-5 py-[50px]">
                    <p>WE ARE THVANI</p>
                    <h1 className="text-5xl font-bold text-color1">
                        Crafting Unique Essence Through Sustainable Fashion.
                    </h1>
                    <p>
                        Where innovation meets nature, creating a fusion of style,
                        sustainability, and modern craftsmanship. We are reimagining fashion
                        through a lens of responsibility and creativity. Our journey is
                        fueled by a passion for turning natures most unexpected resources
                        into garments that transcend trends and redefine style.
                    </p>
                    <div className="self-start">
                        <button className="inline-block border-2 p-3 border-color1 text-sm">
                            SEE OUR COLLECTIONS
                        </button>
                    </div>
                </div>
                <div className="flex w-1/2">
                    <Image src={img1} alt="About Image" className="h-full w-full" />
                </div>
            </div>
            <div className="flex justify-center items-center py-[50px]">
                <Carousel className="w-full max-w-4xl">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-2">
                                    <Card className="h-full">
                                        <CardContent className="flex flex-col gap-3 items-center justify-center px-4 py-4">
                                            <span className="text-lg font-bold">BELIEVE IN POSSIBLE</span>
                                            <span className="text-3xl font-medium text-center">
                                                At Thvani, we dont just create clothing; we craft a movement.
                                                Every stitch, every fabric, every design is a testament to
                                                our unwavering commitment to sustainability and innovation.
                                                By believing in us, youre not just choosing a brand; youre
                                                embracing a vision for a better, greener world.
                                            </span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="flex flex-col bg-color5 my-[50px]">
                <div className="flex h-[50vh]">
                    <div className="flex flex-col justify-center items-center w-1/2 px-[100px] text-center gap-3">
                        <p className="text-3xl font-bold">Our Mission & Vision</p>
                        <p className="text-lg">At THVANI - Craft Unique Essence, our mission is to revolutionize the fashion industry by creating clothing that not only reflects individuality but also honors our planet. We believe that true style is sustainable, and innovation lies in the harmony between cutting-edge design and environmental responsibility.</p>
                    </div>
                    <div className="flex w-1/2">
                        <Image src={img5} alt="" className="h-full w-full" />
                    </div>
                </div>
                <div className="flex h-[50vh]">
                    <div className="flex w-1/2">
                        <Image src={img3} alt="" className="h-full w-full" />
                    </div>
                    <div className="flex flex-col justify-center items-center w-1/2 px-[100px] text-center gap-3">
                        <p className="text-3xl font-bold">Crafting the Future of Fashion</p>
                        <p className="text-lg">Our process begins with selecting organic and regenerative materials like bamboo, banana, and orange fibers—fabrics that not only feel luxurious but also tread lightly on the planet.From fabric to finish, each step is driven by innovation. Our each Design is illustrated by hand, and zero-waste patterns ensures that every garment embodies our commitment to sustainability and style.</p>
                    </div>
                </div>
                <div className="flex h-[50vh]">
                    <div className="flex flex-col justify-center items-center w-1/2 px-[100px] text-center gap-3">
                        <p className="text-3xl font-bold">The Principles That Guide Us</p>
                        <p className="text-lg">Every piece we create begins with deep respect for the environment, from our dyeing methods using natural extracts to our zero-waste designs. While we appreciate the value of cutting-edge technology, we choose to honor traditional craftsmanship, ensuring that each garment is crafted with organic materials from start to finish—including our design process, where we use only organic papers and hand-drawn sketches. We are more than a brand; we are a movement dedicated to genuine sustainability.</p>
                    </div>
                    <div className="flex w-1/2">
                        <Image src={img4} alt="" className="h-full w-full" />
                    </div>
                </div>
            </div>
            <div className="flex p-[100px] gap-5 flex-col justify-center text-center items-center">
                <p className="text-3xl">Join us in making a difference. Trust in our journey, believe in our purpose, and together, lets inspire change. With Thvani, youre not just investing in fashion; youre investing in a legacy of sustainable beauty.</p>
                <button className="inline-block border-2 p-3 border-color1 text-md px-[100px]">
                    JOIN US NOW
                </button>
            </div>
            <div className="flex relative w-full">
                <Image alt="" src={img6} className="w-full" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white gap-5">
                    <p className="font-bold text-xl">OUR PROCESS IS,</p>
                    <p className="font-bold text-4xl">100% TRACEABLE.</p>
                    <p className="font-bold text-4xl">KNOW YOUR SOURCE.</p>
                    <button className="bg-white text-black inline-block border-2 p-3 border-color1 text-md px-[100px]">
                        TRACE MY PRODUCT
                    </button>
                </div>
            </div>
        </div>
    );
}
