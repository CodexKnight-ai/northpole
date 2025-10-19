"use client";

export default function Hero() {
    return (
        <section className="w-full flex items-center justify-center flex-col px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                    "Your Fiancial <br className="hidden sm:block"/> True North"
                </h1>
                <p className="text-base sm:text-lg text-[#414141] max-w-3xl px-4 sm:px-0">
                    Guiding you towards your financial goals with expert strategies and over two decades of market experience. Let's build your wealth, together.
                </p>
            </div>  
            <div className="w-full max-w-6xl mt-12 md:mt-16 lg:mt-20 bg-white rounded-2xl overflow-hidden aspect-video">
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <span className="text-gray-400">Video Placeholder</span>
                    {/* <video className="w-full h-full object-cover" autoPlay loop muted>
                        <source src="/your-video.mp4" type="video/mp4" />
                    </video> */}
                </div>
            </div>
        </section>
    );
}
