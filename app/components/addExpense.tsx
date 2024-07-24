"use client";
import {
    addExpense,
    getExpenses,
    resetAddExpense,
} from "@/redux/features/expenseTracking/expenseTrackingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CustomToast from "./customToast";

type DataProps = {
    title: string;
    category: string;
    description: string;
    amount: number | undefined;
    date: string;
    currency: string;
    paymentMethod: string;
};

type AddExpenseProps = {
    closeForm: (data: boolean) => void;
};

const AddExpense = ({ closeForm }: AddExpenseProps) => {
    const dispatch = useAppDispatch();
    const [formValues, setFormValues] = useState<DataProps>({
        title: "",
        category: "",
        description: "",
        amount: undefined,
        date: "",
        currency: "",
        paymentMethod: "",
    });

    const { addingExpense, addingExpenseSuccess, addingExpenseFailure } = useAppSelector(
        (state) => state.expense
    );
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { value, name } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const submitHandler = () => {
        dispatch(addExpense(formValues));
    };

    useEffect(() => {
        if (Boolean(addingExpenseSuccess)) {
            toast.custom((t) => <CustomToast t={t} message="Expense saved" type="success" />);
            closeForm(false);
            dispatch(resetAddExpense());
            dispatch(getExpenses());
        }
    }, [addingExpenseSuccess]);
    return (
        <div className="rounded-2xl bg-[#fff] pl-6 pr-8 py-6 my-8 text-color2 fon">
            <div className="flex items-center justify-between">
                <h2 className="text-sm sm:text-[24px] font-sans font-bold mb-8">New Expense</h2>
                {/* {button} */}
                <button onClick={() => closeForm(false)}>
                    <i className="ri-close-fill text-color1 text-lg"></i>
                </button>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submitHandler();
                }}
                className="space-y-3 flex flex-col font-sans"
            >
                <div className="flex gap-4 items-center">
                    <label htmlFor="" className="font-medium text-sm w-[120px] md:w-[17%]">
                        Subject <span className="text-color1 font-bold">*</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={formValues?.title}
                        className="bg-color2 text-color3 opacity-50 rounded-md p-2 w-full md:w-[50%]"
                        required
                    />
                </div>
                <div className="flex gap-4 items-center">
                    <label htmlFor="" className="font-medium text-sm w-[120px] md:w-[17%]">
                        Date <span className="text-color1 font-bold">*</span>
                    </label>

                    <input
                        type="Date"
                        name="date"
                        value={formValues?.date}
                        onChange={handleChange}
                        className="bg-color2 text-color3  rounded-md p-2 w-full md:w-[50%] relative  opacity-50"
                        required
                    />
                </div>
                <div className="flex gap-4 items-start">
                    <label htmlFor="" className="font-medium text-sm w-[120px] md:w-[17%]">
                        Description <span className="text-color1 font-bold">*</span>
                    </label>
                    <textarea
                        name="description"
                        onChange={handleChange}
                        value={formValues?.description}
                        rows={10}
                        className="bg-color2 text-color3 opacity-50 rounded-md p-2 w-full md:w-[50%] resize-none outline-none "
                        required
                    />
                </div>

                <div className="flex gap-4 items-center">
                    <label htmlFor="" className="font-medium text-sm w-[120px] md:w-[17%]">
                        Amount <span className="text-color1 font-bold">*</span>
                    </label>
                    <div className=" w-full md:w-[50%] flex gap-3">
                        <input
                            type="number"
                            name="amount"
                            value={formValues?.amount}
                            onChange={handleChange}
                            className="bg-color2 text-color3 opacity-50 rounded-md p-2 w-[60%] md:w-[70%]"
                            required
                        />
                        <select
                            name="currency"
                            onChange={handleChange}
                            value={formValues?.currency}
                            className="w-[40%] md:w-[30%] bg-color2 text-color3 opacity-50 rounded-md p-2 cursor-pointer"
                            required
                        >
                            <option value="">Select</option>

                            <option value="naira" className="">
                                NGN
                            </option>
                            <option value="usd" className="">
                                USD
                            </option>
                            <option value="gbp" className="">
                                GBP
                            </option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <label htmlFor="" className="font-medium text-sm w-[120px] md:w-[17%]">
                        Cateogry <span className="text-color1 font-bold">*</span>
                    </label>

                    <input
                        type="text"
                        name="category"
                        onChange={handleChange}
                        value={formValues?.category}
                        className="bg-color2 text-color3 opacity-50 rounded-md p-2 w-full md:w-[50%]"
                        required
                    />
                </div>
                <div className="flex gap-4 items-center">
                    <label htmlFor="" className="font-medium text-sm w-[120px] md:w-[17%]">
                        Payment Method <span className="text-color1 font-bold">*</span>
                    </label>

                    <select
                        name="paymentMethod"
                        value={formValues?.paymentMethod}
                        className="bg-color2 text-color3 opacity-50 rounded-md p-2 w-full md:w-[50%]"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Cash">Cash</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>

                <div className="flex gap-3 justify-end w-full md:w-[69%] !my-8">
                    <button
                        onClick={() => closeForm(false)}
                        type="button"
                        className="text-xs bg-color2 opacity-50 rounded text-color3 py-2 px-6 font-bold"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="text-xs bg-color1 rounded text-color3 py-2 px-6 font-bold"
                    >
                        {addingExpense ? "...adding new expense" : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddExpense;
