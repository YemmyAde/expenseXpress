"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
    return (
        <div className="">
            <div className="bg-color3 py-5 px-4 sm:px-8 xl:px-32 text-color2 flex justify-between items-center shadow-diverShadow">
                <div className="">
                    <img src="/logo.svg" alt="logo" className="w-[200px]" />
                </div>

                <ul className="flex justify-end text-color-2">
                    <li className=""></li>
                    <li className=""> </li>
                    <li className="font-bold text-sm">
                        <Link href="/login"> Login</Link>
                    </li>
                </ul>
            </div>
            <div className="relative">
                <div className="w-full md:w-[50%] lg:w-[60%] px-4 sm:px-8 xl:px-32 py-14 xl:py-28">
                    <div className="w-16 h-2 bg-color1 mb-6"></div>
                    <p className="text-color2 text-4xl xl:text-6xl leading-10 xl:leading-[70px] font-bold mb-4">
                        The Money App That Works For You
                    </p>
                    <p className="text-[#000] text-sm md:text-lg mb-10 inter">
                        ExpenseXpress empowers you to streamline your finances, generate invoices,
                        track expenses, and regain control of your financial health.
                    </p>
                    <Link
                        href="/login"
                        className="bg-color1 rounded-md text-white p-3 py-2 md:px-6 md:py-4"
                    >
                        Sign up
                    </Link>
                </div>
                <div className="md:hidden ">
                    <img src="/landingPage.webp" alt="" className="" />
                </div>
                <div className=" bg-color2 px-4 sm:px-8 xl:px-32 py-14 xl:py-32 text-color3">
                    <div className="md:w-[40%]">
                        <p className="font-bold mb-7 text-4xl">Join 2 Million+ Members</p>
                        <p className="inter text-lg opacity-80">
                            We have worked hard for the past 1 years saving our members over $1
                            billion dollars* and counting.
                        </p>
                    </div>
                    <div className="flex my-6"></div>
                    <p className="text-[10px] opacity-50 md:w-[70%]">
                        *$1 billion dollars in savings represents savings from bill negotiations
                        after fees, subscription cancellations on an annualized basis, and deposits
                        in smart savings. The total represents a gross figure and may not reflect
                        the net savings individual members realize. This calculation is based on
                        internal data and has not been independently verified
                    </p>
                </div>
                <div className="absolute right-0 xl:right-10 top-[15%] max-md:hidden ">
                    <img src="/landingPage.webp" alt="" className="-rotate-6 lg:-rotate-12 " />
                </div>
            </div>
        </div>
    );
}
