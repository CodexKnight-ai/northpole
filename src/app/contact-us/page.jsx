// app/contact/page.jsx  (Next.js 13+ with App Router)
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white">

            {/* Hero Image */}
            <section className="relative w-full h-[250px] md:h-[400px]">
                <Image
                    src="/sky.jpg" // replace with your image in /public
                    alt="Hero background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black opacity-20" />
            </section>

            {/* Contact Info */}
            <section className="px-6 pt-20 md:px-16 md:pt-32 py-12 flex flex-col md:flex-row md:justify-between">
                <div className="w-full md:w-1/2 gap-8">
                    <h2 className="text-6xl sm:text-7xl font-light mb-4">GET IN TOUCH</h2>
                    <div className="flex gap-4 mb-4 mt-28">
                        <a href="tel:+91782060361" className="text-xl bg-main text-gray-100 px-3 py-1 rounded border border-gray-100">
                            +91 782 060 361
                        </a>
                        <a href="mailto:northpole@gmail.com" className="text-xl bg-gray-100 text-black px-3 py-1 rounded">
                            northpole@gmail.com
                        </a>
                    </div>
                </div>
                <div>
                    <p className="text-gray-400 max-w-md">
                        Lorem ipsum dolor sit amet consectetur. Vitae eu tristique nisl eget sit eget
                        dignissim enim turpis nullam gravida mattis sagittis tempor amet.
                    </p>
                    <div className="flex gap-2 mt-28 w-full justify-center">
                        <FaInstagram className="text-3xl" />
                        <FaFacebook className="text-3xl" />
                        <FaTwitter className="text-3xl" />
                        <FaLinkedin className="text-3xl" />
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="px-6 md:px-16 pb-12 w-full max-w-7xl mx-auto my-20  bg-[#1E1E1E]  border-t-4 border-[#6E92FF]">
                <form className=" p-6 rounded-lg max-w-3xl py-20 mx-auto">
                    <label className="block mb-8">
                        <span className="text-sm text-white">Name</span>
                        <input
                            type="text"
                            className="w-full mt-1 bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#6E92FF] text-white placeholder-gray-400"
                        />
                    </label>
                    <label className="block mb-8">
                        <span className="text-sm text-white">Email ID</span>
                        <input
                            type="email"
                            className="w-full mt-1 bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#6E92FF] text-white placeholder-gray-400"
                        />
                    </label>
                    <label className="block mb-8">
                        <span className="text-sm text-white">Phone Number</span>
                        <input
                            type="tel"
                            className="w-full mt-1 bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#6E92FF] text-white placeholder-gray-400"
                        />
                    </label>
                    <label className="block mb-8">
                        <span className="text-sm text-white">Description</span>
                        <textarea
                            rows={4}
                            className="w-full mt-1 bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#6E92FF] text-white placeholder-gray-400"
                        />
                    </label>
                    <button
                        type="submit"
                        className="w-full mt-8 bg-[#6E92FF] text-white py-2 rounded-md"
                    >
                        Submit
                    </button>
                </form>
            </section>

        </main>
    );
}
