import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import StoreProvider from "./storeProvider";
import "remixicon/fonts/remixicon.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ExpenseXpress",
    description: "Expense tracking, invoice generation",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <StoreProvider>
                <body className="">
                    <Toaster position="top-right" />

                    {children}
                </body>
            </StoreProvider>
        </html>
    );
}
