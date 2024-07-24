"use client";
import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { chart } from "../../utils/contants";
const Chart = () => {
    return (
        <div className="text-color2">
            <div className="rounded-2xl bg-[#fff] text-color2 pl-6 pr-8 py-6 my-8 ">
                <div className="flex justify-between items-center pb-4">
                    <h2 className="text-sm sm:text-[24px] font-sans font-bold">Expenses</h2>
                    <div className="font-medium text-xs sm:text-lg leading-[1.645rem] flex gap-10">
                        <button className="pb-[6px]">Daily</button>
                        <button className="pb-[6px]">Weekly</button>
                        <button className="text-color1 border-b-[2px] border-color1 pb-[6px]">
                            Monthly
                        </button>
                    </div>
                </div>

                <div className="text-[12px] leading-[15px] font-normal text-color2">
                    <ResponsiveContainer
                        width={"105%"}
                        height={250}
                        style={{ marginLeft: "-20px" }}
                    >
                        <AreaChart data={chart} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <XAxis dataKey="name" tickLine={false} />
                            <YAxis tickLine={false} axisLine={false} />

                            <CartesianGrid stroke="#f5f5f5" vertical={false} />

                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#1EA7FF" stopOpacity={0.35} />
                                    <stop offset="95%" stopColor="#1EA7FF" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#41D37E" stopOpacity={0.38} />
                                    <stop offset="95%" stopColor="#41D37E" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area
                                type="monotone"
                                dataKey="uv"
                                stroke="#02cef3"
                                fillOpacity={1}
                                fill="url(#colorUv)"
                                dot={{ stroke: "white", strokeWidth: 2, fill: "#0085a6" }}
                                strokeWidth={2}
                            />
                            <Area
                                type="monotone"
                                dataKey="pv"
                                stroke="#16C6A4"
                                fillOpacity={1}
                                fill="url(#colorPv)"
                                dot={{ stroke: "white", strokeWidth: 2, fill: "#2e9580" }}
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Chart;
