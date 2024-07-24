"use client";
import AddExpense from "@/app/components/addExpense";
import AllExpense from "@/app/components/allExpense";
import { getExpenses } from "@/redux/features/expenseTracking/expenseTrackingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type DataProps = {
    id: string;
    name: string;
    company: {
        name: string;
        catchPhrase: string;
    };
};

const Page = () => {
    const dispatch = useAppDispatch();
    const searchParams = useSearchParams();
    const addNew = searchParams.get("add");
    const [newExpense, setNewExpense] = useState<boolean>(false);
    const [data, setData] = useState<DataProps[]>([]);

    const { gettingExpenses, gettingExpensesFailure, gettingExpensesSuccess } = useAppSelector(
        (state) => state.expense
    );

    useEffect(() => {
        dispatch(getExpenses());
    }, []);

    useEffect(() => {
        if (Boolean(gettingExpensesSuccess)) {
            setData(gettingExpensesSuccess);
        }
    }, [gettingExpensesSuccess]);
    useEffect(() => {
        if (addNew) {
            setNewExpense(true);
        }
    }, [searchParams]);
    return (
        <div className="text-color2">
            {newExpense ? (
                <AddExpense closeForm={setNewExpense} />
            ) : (
                <AllExpense data={data} loading={gettingExpenses} setNewExpense={setNewExpense} />
            )}
        </div>
    );
};

export default Page;
