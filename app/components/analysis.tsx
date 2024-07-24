import React from "react";
import { analysis } from "../../utils/contants";
const Analysis = () => {
    return (
        <div className="font-medium flex gap-6 flex-wrap w-full">
            {analysis.map((item, id) => {
                return (
                    <div key={id}  className="bg-[#fff] rounded-2xl w-[274px] p-5">
                        <div className="border-b-[#E8EDF1] border-b-[1px] pb-7 flex justify-between">
                            <div className="flex items-center gap-2">
                                <div className="bg-[#F3F7FD] w-[34px] h-[34px] rounded-full flex justify-center items-center">
                                    <img src={item.img} alt="" className="" />
                                </div>
                                <p className="text-color1">{item.title}</p>
                            </div>
                            <p className="text-color2 text-[22px] leading-7">{item.numb}</p>
                        </div>
                        <div className="pt-6 pb-2 flex justify-between items-start">
                            <img src={item.chart} alt="" className="ml-[-10px]" />
                            <p className="text-right text-[#768396] pt-4 ">
                                <span className="text-color2">{item.increase} </span>
                                more <br /> from last week
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Analysis;
