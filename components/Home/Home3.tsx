export default function Home3() {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div className="flex flex-col w-full text-center bg-color5 pb-10">
                <div className="flex flex-col py-12 w-full text-center gap-5">
                    <p className="text-2xl md:text-4xl">What we do</p>
                    <p className="mx-5 md:mx-40 lg:mx-[200px] xl:mx-[500px] text-sm md:text-base">
                        We believe that fashion should be a harmonious blend of individuality, creativity, and a deep respect for our planet.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-5 md:gap-20 px-5">
                    <div className="flex flex-col text-left w-full md:w-[300px] gap-3">
                        <h1 className="text-lg md:text-xl font-bold">Our Mission :</h1>
                        <p className="text-sm md:text-base">
                            CUE was founded with the commitment to create clothing that not only reflects your unique essence but also nurtures the earth.
                        </p>
                    </div>
                    <div className="flex flex-col text-left w-full md:w-[300px] gap-3">
                        <h1 className="text-lg md:text-xl font-bold">About Us :</h1>
                        <p className="text-sm md:text-base">
                            Craft Unique Essence, we believe that fashion should be a harmonious blend of individuality, creativity, and a deep respect for our planet.
                        </p>
                    </div>
                    <div className="flex flex-col text-left w-full md:w-[300px] gap-3">
                        <h1 className="text-lg md:text-xl font-bold">The Good Journal :</h1>
                        <p className="text-sm md:text-base">
                            We challenge conventional fashion with our fusion of time-honored craftsmanship and modern techniques.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" w-full h-[50vh] lg:items-center flex text-center sm:text-left sm:px-[100px] text-color1 lg:text-[70px] text-[40px] pt-10">
                <p>Redefining fashion with sustainable innovation and timeless craftsmanship.</p>
            </div>
        </div>
    );
}
