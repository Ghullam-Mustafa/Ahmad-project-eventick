import React from 'react'
import Link from 'next/link'

export default function LoginButton() {
    return (
        <>
            <Link href="/login">
                <button type="button" className=" text-[#FFFFFF] text-base font-medium not-italic border-2 hover:bg-white hover:text-black  border-white  rounded-full w-24 px-5  py-2 ">
                    Login
                </button>
            </Link>
        </>
    )
}
