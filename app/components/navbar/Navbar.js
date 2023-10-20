import Image from 'next/image';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className=" bg-transparent mx-44 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        width={153}
                        height={38.6}
                        alt="Picture of the author"
                    />

                </Link>
                <ul className="space-x-4 flex">
                    <li>
                        <Link href="/schedule">
                            <p className="text-[#FFFFFF] text-base font-medium not-italic">Schedule</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/speakers">
                            <p className="text-[#FFFFFF] text-base font-medium not-italic">Speakers</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ticket">
                            <p className="text-[#FFFFFF] text-base font-medium not-italic">Ticket</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <p className="text-[#FFFFFF] text-base font-medium not-italic">Contact</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <p className="text-[#FFFFFF] text-base font-medium not-italic">Contact</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};


