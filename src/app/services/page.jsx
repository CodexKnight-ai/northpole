import Head from 'next/head';
import Image from 'next/image';
import ServicesCarousel from './ServicesCarousel';

export default function NorthpoleServices() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Our Services - Northpole</title>
        <meta name="description" content="Discover Northpole's comprehensive range of services. We offer 8+ specialized services with expert solutions tailored to your needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="northpole services, business solutions, professional services" />
        <meta property="og:title" content="Our Services - Northpole" />
        <meta property="og:description" content="Discover Northpole's comprehensive range of services. We offer 8+ specialized services with expert solutions tailored to your needs." />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>

      <div className="bg-black text-white min-h-screen pt-32">

        {/* Main Content */}
        <main className="">
          {/* Services Header Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-[90vw] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-startpb-6 sm:pb-8 lg:pb-12 mb-8 sm:mb-12">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-wide">
                OUR<br />SERVICES
              </h1>
            </div>
            <div className="lg:max-w-md xl:max-w-lg">
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas volutpat at. 
                Elit sagittis etiam mauris tellus gravida mattis feugiat semper amet. 
                Tincidunt nunc pulvinar aliquam quisque
              </p>
            </div>
          </section>

          <div className="border-b border-gray-600 w-full"/>

          {/* Stats Section */}
          <section className="grid grid-cols-2 sm:grid-cols-3 sm:py-10 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 text-white text-center">
            <div className="flex flex-col items-center justify-center space-y-1 p-4">
              <div className="flex items-center space-x-1">
                <span className="text-2xl sm:text-4xl lg:text-5xl font-light">8</span>
                <span className="text-lg sm:text-2xl lg:text-2xl font-light">+</span>
              </div>
              <span className="text-xs sm:text-sm font-normal text-gray-300">services</span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-1 p-4">
              <div className="flex items-center space-x-1">
                <span className="text-2xl sm:text-4xl lg:text-5xl font-light">10</span>
                <span className="text-lg sm:text-2xl lg:text-2xl font-light">+</span>
              </div>
              <span className="text-xs sm:text-sm font-normal text-gray-300">projects</span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-1 p-4">
              <div className="flex items-center space-x-1">
                <span className="text-2xl sm:text-4xl lg:text-5xl font-light">50</span>
                <span className="text-lg sm:text-2xl lg:text-2xl font-light">+</span>
              </div>
              <span className="text-xs sm:text-sm font-normal text-gray-300">clients</span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-1 p-4">
              <div className="flex items-center space-x-1">
                <span className="text-2xl sm:text-4xl lg:text-5xl font-light">5</span>
                <span className="text-lg sm:text-2xl lg:text-2xl font-light">+</span>
              </div>
              <span className="text-xs sm:text-sm font-normal text-gray-300">years</span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-1 p-4 col-span-2 sm:col-span-1">
              <div className="flex items-center space-x-1">
                <span className="text-2xl sm:text-4xl lg:text-5xl font-light">24</span>
                <span className="text-lg sm:text-2xl lg:text-2xl font-light">/7</span>
              </div>
              <span className="text-xs sm:text-sm font-normal text-gray-300">support</span>
            </div>
          </section>

          {/*Image Section*/}
          <section className="relative w-full h-64 md:h-[70vh]">
            <Image 
              src="/sky.jpg" 
              alt="Services" 
              fill 
              className="object-cover" 
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </section>
        <ServicesCarousel />
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase text-center md:text-left">
              Get in touch
            </h2>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 sm:px-6 py-3 sm:py-0 h-14 bg-transparent border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 flex-grow"
                  required 
                />
                <button 
                  type="submit" 
                  className="bg-white text-black px-6 py-3 sm:py-0 h-14 rounded-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
        </main>
      </div>
    </div>
  );
}