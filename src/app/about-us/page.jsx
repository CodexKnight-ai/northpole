import Image from "next/image";
import React from "react";
import Testimonial from "../Components/Testimonial";
import OurStory from "../Components/OurStory";
export default function AboutUs() {
    return (
        <>
        <div className="secondary-bg min-h-screen flex flex-col text-black pt-20 sm:pt-[16vh]">
            {/* Title */}
            <main className="flex-1 px-4 md:px-8 lg:px-20 py-10">
                <h2 className="text-center text-[#C00000] font-extrabold text-4xl sm:text-6xl md:text-8xl tracking-wider mb-10">
                    NORTHPOLE TIMES
                </h2>

                {/* Top double border */}
                <div className="border-t-2 border-black mb-2"></div>
                <div className="border-t-2 border-black mb-8"></div>

                {/* News Grid */}
                <section className="grid gap-8 grid-cols-1 lg:grid-cols-4">
                    {/* Card 1 */}
                    <article className="border-b pb-4 lg:border-b-0 lg:border-r lg:pr-6 border-black">

                        <h3 className="text-lg font-semibold mb-3">
                            “Lorem ipsum dolor ipsum sit amet ipsum amet - consectetur”
                        </h3>
                        <div className="w-full h-48 relative mb-4">
                            <Image
                                src="/sky.jpg"
                                alt="sky"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw"
                                priority
                            />
                        </div>
                        <p className="text-md leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Turpis rutrum dictumst
                            vitae sit at rutrum sodales. Tempus lectus varius ac posuere. Ac
                            ultrices proin placerat vitae risus.
                        </p>
                        <p className="text-md leading-relaxed mt-3">
                            Eget pulvinar at. At quis amet sit egestas eu nullam mattis. Massa
                            ultrices odio. Pellentesque tristique magna egestas fringilla
                            dignissim habitasse turpis odio. Eget a et lorem. Adipiscing
                            feugiat lectus sed. Condimentum et massa nisl fringilla in.
                        </p>
                    </article>

                    {/* Card 2 */}
                    <article className="border-b pb-4 lg:col-span-2 lg:border-b-0 lg:border-r lg:pr-6 border-black">
                        <h3 className="text-2xl font-semibold mb-3">
                            “Lorem ipsum dolor ipsum sit amet ipsum amet - consectetur”
                        </h3>
                        <div className="w-full relative aspect-video mb-4">
                            <Image
                                src="/sky.jpg"
                                alt="sky"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px)66vw"
                                priority
                            />
                        </div>
                        <p className="text-md leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor delectus quam fuga harum id cumque maiores ex, reiciendis vitae placeat illo distinctio eos dolore? Ad fugiat repellat laborum magni veniam corporis quaerat iusto cumque suscipit quas, doloribus voluptatum quibusdam eos? Fugit temporibus porro sint enim totam eveniet quam recusandae?
                        </p>
                        <p className="text-md leading-relaxed mt-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex voluptatibus voluptates minus labore voluptas repellat, aperiam pariatur consequatur? Nesciunt reprehenderit velit, mollitia blanditiis consequatur laborum aperiam praesentium error debitis quas! Vero nobis laborum laboriosam earum!
                        </p>
                    </article>

                    {/* Card 3 */}
                    <article>
                        <h3 className="text-lg font-semibold mb-3">
                            “Lorem ipsum dolor ipsum sit amet ipsum amet - consectetur”
                        </h3>
                        <div className="relative w-full h-48 mb-4">
                            <Image
                                src="/sky.jpg"
                                alt="sky"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw"
                                priority
                            />
                        </div>

                        <p className="text-md leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Turpis rutrum dictumst
                            vitae sit at rutrum sodales. Tempus lectus varius ac posuere. Ac
                            ultrices proin placerat vitae risus.
                        </p>
                        <p className="text-md leading-relaxed mt-3">
                            Eget pulvinar at. At quis amet sit egestas eu nullam mattis. Massa
                            ultrices odio. Pellentesque tristique magna egestas fringilla
                            dignissim habitasse turpis odio. Eget a et lorem. Adipiscing
                            feugiat lectus sed. Condimentum et massa nisl fringilla in.
                        </p>
                    </article>
                </section>

                {/* Bottom border */}
                <div className="border-t border-black mt-8"></div>

                {/*Achievements*/}
                <section className="flex flex-col gap-6 py-10">
                    <h2 className="text-left italic bold text-xl md:text-3xl mb-10">
                        Achievements
                    </h2>
                    <div className="w-full px-auto grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6">
                        <article className="border-b pb-4 lg:border-b-0 lg:border-r lg:pr-6 border-black text-justify">
                            <h2 className="text-lg font-semibold mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <div className="relative w-full h-48 mb-4">
                                <Image
                                    src="/sky.jpg"
                                    alt="Achievement visual"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, 25vw"
                                />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptatum veritatis ab repudiandae reprehenderit, dolor maxime quasi enim natus autem, laudantium provident. Perferendis, quisquam natus repellat odio corporis recusandae dolorem tempora, quis sint error voluptatem enim id quidem vero dolorum ut ea, esse inventore dolore aliquam? Reiciendis aspernatur, aut doloribus magnam ratione eligendi consequatur officia soluta deserunt est repudiandae maiores?</p>
                        </article>
                        <article className="border-b pb-4 lg:border-b-0 lg:border-r lg:pr-6 border-black text-justify">
                            <h2 className="text-lg font-semibold mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <div className="relative w-full h-48 mb-4">
                                <Image
                                    src="/sky.jpg"
                                    alt="Achievement visual"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, 25vw"
                                />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptatum veritatis ab repudiandae reprehenderit, dolor maxime quasi enim natus autem, laudantium provident. Perferendis, quisquam natus repellat odio corporis recusandae dolorem tempora, quis sint error voluptatem enim id quidem vero dolorum ut ea, esse inventore dolore aliquam? Reiciendis aspernatur, aut doloribus magnam ratione eligendi consequatur officia soluta deserunt est repudiandae maiores?</p>
                        </article>
                        <article className="border-b pb-4 lg:border-b-0 lg:border-r lg:pr-6 border-black text-justify">
                            <h2 className="text-lg font-semibold mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <div className="relative w-full h-48 mb-4">
                                <Image
                                    src="/sky.jpg"
                                    alt="Achievement visual"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, 25vw"
                                />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptatum veritatis ab repudiandae reprehenderit, dolor maxime quasi enim natus autem, laudantium provident. Perferendis, quisquam natus repellat odio corporis recusandae dolorem tempora, quis sint error voluptatem enim id quidem vero dolorum ut ea, esse inventore dolore aliquam? Reiciendis aspernatur, aut doloribus magnam ratione eligendi consequatur officia soluta deserunt est repudiandae maiores?</p>
                        </article>
                        <article className=" lg:pr-6 text-justify">
                            <h2 className="text-lg font-semibold mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <div className="relative w-full h-48 mb-4">
                                <Image
                                    src="/sky.jpg"
                                    alt="Achievement visual"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, 25vw"
                                />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptatum veritatis ab repudiandae reprehenderit, dolor maxime quasi enim natus autem, laudantium provident. Perferendis, quisquam natus repellat odio corporis recusandae dolorem tempora, quis sint error voluptatem enim id quidem vero dolorum ut ea, esse inventore dolore aliquam? Reiciendis aspernatur, aut doloribus magnam ratione eligendi consequatur officia soluta deserunt est repudiandae maiores?</p>
                        </article>
                    </div>
                </section>
                {/* Bottom border */}
                <div className="border-t border-black mt-8"></div>
                <Testimonial/>
            </main>
        </div>
                <OurStory/>
        </>
    );
}
