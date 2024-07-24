"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import "remixicon/fonts/remixicon.css";

const Layout: React.FC<{
    children?: ReactNode;
}> = ({ children }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>();
    const [showBalance, setShowBalance] = useState<boolean>(true);

    const currentPath = usePathname();
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", updateWindowWidth);

        return () => {
            window.removeEventListener("resize", updateWindowWidth);
        };
    }, []);
    const toggleMenu = () => {
        if (windowWidth! <= 768) {
            setShowMenu(!showMenu);
        }
    };

    return (
        <section className="flex font-poppins grid-cols-3 text-[#202020] flex-row h-full  font-sans">
            <div className="">
                <div
                    className={`w-[70px] md:w-[200px] bg-color3 h-[100vh] top-0  z-[5]  fixed leftNav transition-all ease-in-out overflow-auto ${
                        showMenu ? "block left-0" : "hidden md:block left-[-94px]"
                    }`}
                >
                    <div className="flex justify-between flex-col h-full">
                        <div className="justify-center w-full flex gap-6 flex-col items-start my-5 px-6">
                            <button className="md:hidden" onClick={toggleMenu}>
                                <div className="mb-32">
                                    <i className="ri-close-line "></i>
                                </div>
                            </button>
                            <div className="hidden md:flex w-full items-center justify-center flex-col mb-24 mt-4">
                                <div className="border border-color2 rounded-full w-24 h-24 ">
                                    <img src="/profile.jpg" alt="" className="rounded-full" />
                                </div>
                                <p className="text-sm font-bold mt-2 text-color2">Vandice Col</p>
                            </div>

                            <Link
                                href="/dashboard"
                                className={`relative z-[2] flex gap-2 ${
                                    currentPath === "/dashboard" &&
                                    "md:text-color3 md:bg-color1 md:rounded-lg w-full"
                                } md:p-2.5  `}
                            >
                                <i
                                    className={`ri-home-6-fill ${
                                        currentPath === "/dashboard" && "max-md:text-color1"
                                    } `}
                                ></i>
                                <p className="max-md:hidden">Home</p>
                            </Link>

                            <Link
                                href="/dashboard/expenses"
                                className={`relative z-[2] flex gap-2 ${
                                    currentPath === "/dashboard/expenses" &&
                                    "md:text-color3 md:bg-color1 md:rounded-lg w-full"
                                } md:p-2.5  `}
                            >
                                <i
                                    className={`ri-bank-card-2-fill ${
                                        currentPath === "/dashboard/expenses" &&
                                        "max-md:text-color1"
                                    }`}
                                ></i>
                                <p className="max-md:hidden">Expenses</p>
                            </Link>
                            <Link
                                href="#"
                                className={`relative z-[2] flex gap-2 ${
                                    currentPath === "/invoice" && "activePage"
                                } md:p-2.5 w-full`}
                            >
                                <i
                                    className={`ri-receipt-fill ${
                                        currentPath === "/invoice" && "max-md:text-color1"
                                    }`}
                                ></i>
                                <p className="max-md:hidden">Invoice</p>
                            </Link>
                            <Link
                                href="#"
                                className={`relative z-[2] flex gap-2 ${
                                    currentPath === "/settings" && "activePage"
                                } md:p-2.5 w-full`}
                            >
                                <i
                                    className={`ri-settings-3-fill ${
                                        currentPath === "/settings" && "max-md:text-color1"
                                    }`}
                                ></i>
                                <p className="max-md:hidden">Settings</p>
                            </Link>
                        </div>

                        <div className="flex justify-center">
                            <Link href="/" className="w-[70%] mb-12">
                                <img src="/logo.svg" alt="" className="" />
                            </Link>
                        </div>
                    </div>
                </div>

                <img src="/images/logo.svg" alt="" className=" mb-10" />
            </div>
            <div
                className="fixed top-0 bg-[#fff] h-[50px] z-[3] flex items-center justify-between md:justify-end w-full md:pr-[41px]
      md:gap-[200px] lg:gap-[410px] px-[30px] md:px-0"
            >
                <button className="md:hidden" onClick={toggleMenu}>
                    <i className="ri-menu-line float-left"></i>
                </button>

                <div className="flex gap-3 items-center">
                    <p className="text-color2 font-bold text-sm">{`Available Bal: ${
                        showBalance ? "*******" : "$34,000"
                    } `}</p>
                    <i
                        className={`${
                            showBalance ? "ri-eye-fill" : "ri-eye-off-fill"
                        } cursor-pointer text-color1`}
                        onClick={() => setShowBalance(!showBalance)}
                    ></i>
                </div>
            </div>

            <div
                className=" text-[#fff] w-full min-h-[100vh] bg-[#f3f4f8] relative top-[50px]  md:pl-[200px]  pt-[30px]  
       overscroll-x-hidden box-border mb-[50px]  "
            >
                <div className="w-[100%] max-w-[100%] px-[20px] md:px-[40px]">{children}</div>
            </div>
        </section>
    );
};

export default Layout;
