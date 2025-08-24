"use client";

export default function Hero() {
    return (
        <section className="w-full flex items-center justify-center flex-col px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                    "Lorem ipsum <br className="hidden sm:block"/> vel in falcunis"
                </h1>
                <p className="text-base sm:text-lg text-[#414141] max-w-3xl px-4 sm:px-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro explicabo neque veniam. In, nostrum tempore? Quaerat commodi soluta magni quibusdam ipsum, aut, non ipsa perspiciatis quas, sint facere! Eos laboriosam aliquam, voluptatum saepe, quas distinctio magni accusamus iure delectus iusto quo nam soluta est porro! Officia deserunt quia quaerat ad.
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
