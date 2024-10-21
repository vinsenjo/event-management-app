import Image from "next/image"

const Hero = ()=>{
    const images = ["/homeGrid-1.jpg","/homeGrid-2.jpg" ,"/homeGrid-3.jpg","/homeGrid-4.jpg","/homeGrid-7.jpg","/homeGrid-8.jpg"]
    return(
        <div className="relative mb-20">
            <Image src='/hero.jpg' width={3000} height={2000} alt="hero" className="absolute opacity-20 bg-black z-0 w-full object-cover h-screen"/>
            <div className="flex flex-col  lg:flex-row gap-10 lg:justify-between  mx-auto  pt-20 px-2 lg:px-32 z-20">
                <div className="lg:max-w-[45%] flex flex-col items-center justify-center gap-2">
                    <h1 className="text-6xl z-20 font-semibold">Turn Your Festival Into <span className="text-lightBlue">Memorable</span>  Experience</h1>
                    <p className="text-lg">Platform for planning and organizing your events. We provide you with the best ideas for any events, so that you can easily plan and organize your events</p>
                </div>
                <div className="absolute inset-0 bg-black opacity-30 z-10 h-screen"></div>
            <div className="relative z-20  columns-3   space-y-2  lg:max-w-[60%]">
                {images.map((item,idx)=>(
                    <div key={idx}>
                        <Image
                        src={item} width={200} height={100} alt="hero"
                        className="rounded-xl opacity-85 bg-black"
                        />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Hero