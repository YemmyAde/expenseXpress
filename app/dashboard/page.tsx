"use client";
import React from "react";
import Chart from "../components/chart";
import Analysis from "../components/analysis";
import QuickAccess from "../components/quickAccess";
const Page = () => {
    return (
        <div className="text-color2">
            <Analysis />
            <QuickAccess />
            <Chart />
        </div>
    );
};

export default Page;
