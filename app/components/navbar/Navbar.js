// import Image from 'next/image';

// import Link from 'next/link';
// import LoginButton from '../loginButton/LoginButton';

// export default function Navbar() {
//     return (
//         <nav className=" bg-transparent mx-44 p-4">
//             <div className="container mx-auto flex items-center justify-between">
//                 <Link href="/">
//                     <Image
//                         src="/logo.png"
//                         width={153}
//                         height={38.6}
//                         alt="Picture of the author"
//                     />

//                 </Link>
//                 <ul className="space-x-4  block sm:flex ">
//                     <li>
//                         <Link href="/schedule">
//                             <p className="text-[#FFFFFF] text-base font-medium not-italic  py-2 px-4 ">Schedule</p>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/speakers">
//                             <p className="text-[#FFFFFF] text-base font-medium not-italic py-2 px-4">Speakers</p>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/ticket">
//                             <p className="text-[#FFFFFF] text-base font-medium not-italic py-2 px-4">Ticket</p>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/contact">
//                             <p className="text-[#FFFFFF] text-base font-medium not-italic py-2 px-4">Contact</p>
//                         </Link>
//                     </li>
//                     <li>
//                        <LoginButton/>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };




// import Image from 'next/image';
// import Link from 'next/link';
// import LoginButton from '../loginButton/LoginButton';

// export default function Navbar() {
//   return (
//     <nav className="bg-transparent px-4 sm:px-6 lg:px-8">
//       <div className=" mx-44  my-5 flex flex-col sm:flex-row items-center justify-between">
//         <Link href="/">
//           <Image
//             src="/logo.png"
//             width={153}
//             height={38.6}
//             alt="Picture of the author"
//           />
//         </Link>
//         <ul className=" flex-wrap justify-center  hidden  xl:flex space-x-4">
//           <li>
//             <Link href="/schedule">
//               <p className="text-white text-base font-medium py-2 px-4">Schedule</p>
//             </Link>
//           </li>
//           <li>
//             <Link href="/speakers">
//               <p className="text-white text-base font-medium py-2 px-4">Speakers</p>
//             </Link>
//           </li>
//           <li>
//             <Link href="/ticket">
//               <p className="text-white text-base font-medium py-2 px-4">Ticket</p>
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact">
//               <p className="text-white text-base font-medium py-2 px-4">Contact</p>
//             </Link>
//           </li>
//           <li>
//             <LoginButton />
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LoginButton from '../loginButton/LoginButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" bg-transparent mx-44 p-4">
      <div className="container mx-auto sm:flex items-center justify-between">
        <Link href="/">
        <Image
        src="/logo.png"
             width={153}
             height={38.6}
             alt="Picture of the author"
           />
        </Link>
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link href="/schedule">
              <p className="text-[#FFFFFF] text-base font-medium not-italic py-2 px-4">Schedule</p>
            </Link>
          </li>
          <li>
            <Link href="/speakers">
              <p className="text-[#FFFFFF] text-base font-medium not-italic py-2 px-4">Speakers</p>
            </Link>
          </li>
          <li>
            <Link href="/ticket">
              <p className="text-[#FFFFFF] text-base font-medium not-italic py-2 px-4">Ticket</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="text-[#FFFFFF] text-base font-medium not-italic py-2 px-4">Contact</p>
            </Link>
          </li>
          <li>
            <LoginButton/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
