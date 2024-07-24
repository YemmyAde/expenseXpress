import Link from "next/link";
import React from "react";

const QuickAccess = () => {
    return (
        <div className="rounded-2xl bg-[#fff] text-color2 pl-6 pr-8 py-6 my-8 ">
            <h2 className="text-sm sm:text-[24px] font-sans font-bold mb-8">Quick Access</h2>

            <div className="flex gap-7 px-8 justify-between 2xl:justify-start flex-wrap">
                <Link href="/dashboard/expenses?add=true" className="">
                    <div className="rounded-md border-[0.5px] border-color2 text-sm p-4 font-bold gap-3 flex items-center">
                        <div className="bg-color1 w-8 h-8 rounded-full flex items-center justify-center">
                            <i className="ri-bank-card-2-fill text-white "></i>
                        </div>
                        <span className="">+ New expense</span>
                    </div>
                </Link>

                <Link href="" className="">
                    <div className="rounded-md border-[0.5px] border-color2 text-sm p-4 font-bold gap-3 flex items-center">
                        <div className="bg-color1 w-8 h-8 rounded-full flex items-center justify-center">
                            <i className="ri-receipt-fill text-white "></i>
                        </div>
                        <span className="">+ Add invoice</span>
                    </div>
                </Link>

                <Link href="" className="">
                    <div className="rounded-md border-[0.5px] border-color2 text-sm p-4 font-bold gap-3 flex items-center">
                        <div className="bg-color1 w-8 h-8 rounded-full flex items-center justify-center">
                            <i className="ri-settings-3-fill text-white "></i>
                        </div>
                        <span className="">Edit settings</span>
                    </div>
                </Link>
                <Link href="" className="">
                    <div className="rounded-md border-[0.5px] border-color2 text-sm p-4 font-bold gap-3 flex items-center">
                        <div className="bg-color1 w-8 h-8 rounded-full flex items-center justify-center">
                            <i className="ri-settings-3-fill text-white "></i>
                        </div>
                        <span className="">Edit settings</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default QuickAccess;
