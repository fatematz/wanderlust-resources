import { ArrowRight } from "lucide-react";
import bannerImg from "@/assets/Banner.png"
// import discoverImg from "@/assets/discover.png"


const Banner = () => {
    return (
        <>
        <div
            style={{
                backgroundImage: `url(${bannerImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className=" min-h-[746px]  "
        >
            <div className="text-white mt-[190px] text-center">
            <div className="">

            <h1 className="text-[90px] font-semibold leading-[100%] ">Discover Your <br /> Next Adventure</h1>
            

            </div>
            <div className="">
                <p className="text-[20px] mt-[12px] mb-[40px]">Explore breathtaking destinations and create unforgettable memories with <br /> our curated travel experiences.</p>
            </div>

            <div className="flex justify-center items-center gap-4 ">
                <div className="w-[207px] bg-[#15A1BF] p-4 flex justify-center items-center gap-4">
                    <button>EXPLORE NOW </button>
                    <ArrowRight className="text-white w-5 h-5 cursor-pointer" />
                </div>
                <div className="w-[207px] bg-white/40 backdrop-blur-[2px] p-4">
                    <button>VIEW DESTINATION</button>
                </div>
            </div>
            </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 mt-35 ">
    <div className="bg-[#6B7280] p-4 border-r border-gray-500 ">
        <p className="text-white font-semibold">Location</p>
        <p className="text-gray-300 text-sm">Address, City Or Zip</p>
    </div>
    <div className="bg-[#6B7280] p-4 border-r border-gray-500">
        <p className="text-white font-semibold">Date/Duration</p>
        <p className="text-gray-300 text-sm">Anytime/3 Days</p>
    </div>
    <div className="bg-[#6B7280] p-4 border-r border-gray-500">
        <p className="text-white font-semibold">Budget</p>
        <p className="text-gray-300 text-sm">$0-$3000</p>
    </div>
    <div className="bg-[#6B7280] p-4">
        <p className="text-white font-semibold">People</p>
        <p className="text-gray-300 text-sm">5-10</p>
    </div>
    <div className="bg-[#15A1BF] px-10 flex items-center justify-center cursor-pointer sm:col-span-2 xl:col-span-1">
        <p className="text-white font-semibold text-lg">Search</p>
    </div>
</div>
            
        </div>


        </>
    );
};

export default Banner;