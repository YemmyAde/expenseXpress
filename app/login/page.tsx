"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
    const [signup, setSignup] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<{
        email: string;
        password: string;
    }>({
        email: "",
        password: "",
    });
    const router = useRouter();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { value, name } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.push("/dashboard");
    };
    return (
        <section className="bg-color3">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link
                    href="/"
                    className="flex items-center mb-6 text-2xl font-semibold text-color2"
                >
                    ExpenseXpress
                </Link>
                <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-color2">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tightmd:text-2xl text-color3">
                            {signup ? "Sign up for an account" : "Login to your account"}
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formValues?.email}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formValues?.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-color3 text-color2 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                                {signup ? "Sign up" : "Login"}
                            </button>
                            <p className="text-sm font-light text-color3">
                                Don’t have an account yet?{" "}
                                <button
                                    type="button"
                                    onClick={() => setSignup(!signup)}
                                    className="font-medium  hover:underline"
                                >
                                    {signup ? "Login " : "Sign up"}
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
