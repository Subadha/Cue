export default function Home7(){
    return(
        <div className="flex lg:h-[50vh] my-[50px] flex-col lg:flex-row lg:text-left text-center">
            <div className="flex w-1/2 mx-[100px] flex-col gap-5">
                <span className="text-color4 text-[50px]">INSPIRED BY NATURE, CRAFTED WITH PURPOSE</span>
                <div className="text-color4 border-2 lg:w-[10vw] p-2 text-center rounded-3xl border-color4">
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className="flex w-1/2 mx-[100px] flex-col gap-5">
                <span className="text-3xl">Our Uniqueness: Fashion Rooted in Natures Wisdom</span>
                <span>We go beyond the typical eco-friendly approach by transforming these materials through state-of-the-art processes, balancing craftsmanship with modern technology.</span>
                <div className="text-color4 border-2 lg:w-[10vw] p-2 text-center rounded-3xl border-color4">
                    <button>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}