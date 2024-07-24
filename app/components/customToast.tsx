import React from "react";
import { Toast } from "react-hot-toast";

type CustomToastProps = {
    t: Toast;
    message: string;
    type: "error" | "warning" | "success";
};

const CustomToast = ({ t, message, type }: CustomToastProps) => (
    <div
        className={`bg-white text-color2 px-6 py-4 shadow rounded-full flex fixed z-[10000] ${
            t.visible ? "animate-enter" : "animate-leave"
        }`}
    >
        {type !== "success" ? (
            <i className="ri-close-line mr-4 text-color1"></i>
        ) : (
            <i className="ri-check-double-line mr-4 text-color1"></i>
        )}
        {message}
    </div>
);

export default CustomToast;
