// import Image from 'next/image'
// import Navbar from '../navbar/Navbar'

// export default function Header() {
//     return (
//         <>
//             <div className=" header">
//                 <div className="gradient-overlay">
//                     <Navbar />
//                 </div>

//                 <div className="">
//                     <section className="text-gray-600 body-font">
//                         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//                             <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//                                 <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
//                                     <br className="hidden lg:inline-block" />readymade gluten
//                                 </h1>
//                                 <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
//                                 <div className="flex justify-center">
//                                     <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//                                     <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
//                                 </div>
//                             </div>
//                             <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//                                 <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
//                             </div>
//                         </div>
//                     </section>

//                 </div>


//             </div>


//         </>
//     )
// }



import Image from 'next/image';
import Navbar from '../navbar/Navbar';
import Button from '../button/Button';

export default function Header() {
    return (
        <>
            <div className="header">
                {/* Add your gradient-overlay div or styling here */}
                <div className="gradient-overlay">
                <Navbar />
                <div>
                    <section className="text-gray-600 mx-44 body-font">
                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <Image className="object-cover object-center rounded" alt="Hero Image" src="/pngguru 2.png" width={720} height={600} />
                            </div>

                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 className="title-font sm:text-4xl text-xl mb-4 not-italic font-bold w-96  text-[#fff]">SBS MTV The Kpop 
                                    <br  />Show Ticket Package
                                </h1>
                                <p className=" mb-7 text-white">Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.</p>
                                <div className="flex justify-center gap-5">
                                    <Button className="text-white border-[#F5167E] border-2 px-10 rounded-full hover:bg-[#F5167E]  py-3 " name="Get Ticket" />
                                    <Button className="text-white border-[#fff] border-2 px-10 rounded-full hover:bg-[#fff] hover:text-black  py-3 " name="Learn More" />
                                    
                                </div>
                            </div>
                            
                        </div>
                    </section>
                </div>
                </div>
            </div>
        </>
    );
}
