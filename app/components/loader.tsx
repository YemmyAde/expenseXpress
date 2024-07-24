import React from "react";

type LoaderProps = {
    size?: number;
    color?: string;
    className?: string;
};

const Loader = ({ size, color, className }: LoaderProps) => {
    return (
        <svg
            className={`animate-spin mx-auto  ${
                !size ? "h-5 w-5" : `h-${size} w-${size}`
            } ${className}`}
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-0"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className={` ${color ? `!text-${color}` : "text-color2"}`}
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
    );
};

export default Loader;
