"use client";


export default function About() {
    return (
        <section className="flex items-center justify-center flex-col px-50 mb-40">
            <div className="w-[90%] flex  h-[70vh] gap-4">
                <div className="w-1/3 flex flex-col gap-8 h-full">
                    <h1 className="text-4xl text-white font-bold">Kalpesh Patel</h1>
                    <p className="text-[#414141] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam id optio animi nulla dolores modi hic possimus quisquam! Fugiat doloremque deleniti suscipit dicta consectetur tempora delectus animi. Impedit incidunt officiis obcaecati hic sapiente veniam vitae ipsa quas, ad fugiat quis.</p>
                </div>
                <div className="w-1/3 bg-white rounded-xl p-6 h-full flex flex-col gap-4">
                    <div className="h-[20%]"></div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl text-col1 font-bold">23 Years +</h1>
                        <p className="text-[#414141] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officiis labore enim, voluptas distinctio molestiae autem quis ab dicta a!</p>
                    </div>
                    <div className="bg-gray-700 w-full h-[80%] rounded-xl">
                        <img src="./planet.jpg" alt="" className="rounded-lg"/>
                    </div>
                </div>
                <div className="w-1/3 rounded-xl p-6 h-full flex flex-col justify-between">
                    <div className=" w-full h-[40%] rounded-xl p-8">
                        <img src="./planet.jpg" alt="" className="rounded-lg"/>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-7">
                            <span className=" rounded-full w-[40px] h-[40px] flex justify-center items-center text-xl text-black bg-white">+</span> 
                            <span className="text-[#414141] text-md">Lorem woksd dajkd s dajdksdsd Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat molestiae totam. Quos.</span>
                        </div>
                        <div className="flex flex-row gap-7">
                            <span className=" rounded-full w-[40px] h-[40px] flex justify-center items-center text-xl text-black bg-white">+</span> 
                            <span className="text-[#414141] text-md">Lorem woksd dajkd s dajdksdsd Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat molestiae totam. Quos.</span>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
            

        </section>
    );
}