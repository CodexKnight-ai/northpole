"use client";

export default function About() {
    return (
        <section className="w-full py-16 md:py-24 lg:py-32 ">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6 lg:gap-8 p-6 lg:p-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-white">Kalpesh Patel</h1>
                        <p className="text-gray-400 text-base md:text-lg">
                            Kalpesh Patel is a NISM-certified Research Analyst, Wealth Creator, and founder of Northpole Wealth. With over 25 years of stock market experience, he has helped thousands of individuals achieve their financial goals through a disciplined, goal-based approach. Known for his systematic strategies and mentorship, Kalpesh Patel is a recognized expert across media and financial circles.
                        </p>
                    </div>

                    {/* Middle Column */}
                    <div className="bg-white rounded-2xl p-6 flex flex-col gap-6">
                        <div className="flex-1 flex flex-col justify-between gap-6">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-black">25 Years +</h1>
                                <p className="text-gray-600 mt-2 text-base md:text-lg">
                                    Over 25 years of experience in financial markets                                </p>
                            </div>
                            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-gray-100">
                                <img 
                                    src="/planet.jpg" 
                                    alt="" 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PHRleHQgeD0iNTAlIiB5PSI1JSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzY2NiI+UGxhY2Vob2xkZXIgSW1hZ2U8L3RleHQ+PC9zdmc+'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6 p-6 lg:p-8">
                        <div className="aspect-square w-full max-w-xs mx-auto rounded-2xl overflow-hidden bg-gray-100">
                            <img 
                                src="/planet.jpg" 
                                alt="" 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PHRleHQgeD0iNTAlIiB5PSI1JSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzY2NiI+UGxhY2Vob2xkZXIgSW1hZ2U8L3RleHQ+PC9zdmc+'
                                }}
                            />
                        </div>
                        
                        <div className="space-y-4">
                            {[
                                "Lorem woksd dajkd s dajdksdsd Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat molestiae totam. Quos.",
                                "Lorem woksd dajkd s dajdksdsd Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat molestiae totam. Quos."
                            ].map((text, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <span className="flex-shrink-0 mt-1 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-lg md:text-xl text-black bg-white">
                                        +
                                    </span>
                                    <p className="text-gray-400 text-sm md:text-base">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}