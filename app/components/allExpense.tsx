import React from "react";
import Loader from "./loader";
import Link from "next/link";

type DataProps = {
    id: string;
    name: string;
    company: {
        name: string;
        catchPhrase: string;
    };
};

type AddExpenseProps = {
    data: DataProps[];
    loading: boolean;
    setNewExpense: (data: boolean) => void;
};

const AllExpense = ({ data, loading, setNewExpense }: AddExpenseProps) => {
  
    return (
        <div className="rounded-2xl bg-[#fff] pl-6 pr-8 py-6 my-8 text-color2">
            <div className="flex items-center justify-between">
                <h2 className="text-sm sm:text-[24px] font-sans font-bold mb-8">Expenses</h2>

                <button
                    onClick={() => setNewExpense(true)}
                    className="text-xs bg-color1 rounded text-color3 p-2"
                >
                    + New expense
                </button>
            </div>

            {loading ? (
                <Loader />
            ) : (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                    <table className="w-full text-sm text-left rtl:text-right text-color3 dark:text-color3">
                        <thead className="text-xs text-color3 uppercase bg-color2 dark:bg-color2">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Company
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Catch Phrase
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((item, id) => {
                                return (
                                    <tr
                                        key={id}
                                        className="odd:bg-white odd:dark:bg-color2 odd:dark:opacity-60 even:bg-color2 even:dark:bg-color2 border-b dark:border-gray-700"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {item?.name}
                                        </th>
                                        <td className="px-6 py-4">{item?.company?.name}</td>
                                        <td className="px-6 py-4">{item?.company?.catchPhrase}</td>
                                        <td className="px-6 py-4">$2999</td>
                                        <td className="px-6 py-4">
                                            <Link
                                                href="#"
                                                className="font-medium text-color1 hover:underline"
                                            >
                                                Edit
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllExpense;
