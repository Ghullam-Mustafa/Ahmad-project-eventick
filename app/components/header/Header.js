import Image from 'next/image'
import Navbar from '../navbar/Navbar'

export default function Header() {
    return (
        <>
            <div className=" header">
                <div className="gradient-overlay">
                    <Navbar/>
                </div>
                

            </div>
           

        </>
    )
}