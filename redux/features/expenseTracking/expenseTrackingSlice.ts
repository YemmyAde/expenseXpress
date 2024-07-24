import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type Expense = {
    title: string;
    category: string;
    description: string;
    amount: number | undefined;
    date: string;
    currency: string;
    paymentMethod: string;
};

type ExpenseState = {
    addingExpense: boolean;
    addingExpenseSuccess: any | null;
    addingExpenseFailure: string | null;
    gettingExpenses: boolean;
    gettingExpensesSuccess: any | null;
    gettingExpensesFailure: string | null;
};

const initialState: ExpenseState = {
    addingExpense: false,
    addingExpenseSuccess: null,
    addingExpenseFailure: null,
    gettingExpenses: false,
    gettingExpensesSuccess: null,
    gettingExpensesFailure: null,
};

export const getExpenses = createAsyncThunk("getExpenses", async (_, { rejectWithValue }) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to add expense");
        }
        let result = await response.json();
        return result;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

export const addExpense = createAsyncThunk<Expense, Expense, { rejectValue: string }>(
    "expenses/add",
    async (expense, { rejectWithValue }) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(expense),
            });
            if (!response.ok) {
                throw new Error("Failed to add expense");
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const expense = createSlice({
    name: "expense",
    initialState,
    reducers: {
        resetAddExpense(state) {
            state.addingExpense = false;
            state.addingExpenseSuccess = null;
            state.addingExpenseFailure = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getExpenses.pending, (state) => {
                state.gettingExpenses = true;
                state.gettingExpensesFailure = null;
                state.gettingExpensesSuccess = null;
            })
            .addCase(getExpenses.fulfilled, (state, action) => {
                state.gettingExpensesSuccess = action.payload;
                state.gettingExpenses = false;
            })

            .addCase(getExpenses.rejected, (state, action: any) => {
                state.gettingExpenses = false;
                state.gettingExpensesFailure = action?.payload || "Failed";
            })
            .addCase(addExpense.pending, (state) => {
                state.addingExpense = true;
                state.addingExpenseFailure = null;
                state.addingExpenseSuccess = null;
            })
            .addCase(addExpense.fulfilled, (state, action) => {
                state.addingExpenseSuccess = action.payload;
                state.addingExpense = false;
            })

            .addCase(addExpense.rejected, (state, action) => {
                state.addingExpenseFailure = action?.payload || "Failed";
            });
    },
});

export const { resetAddExpense } = expense.actions;
export default expense.reducer;
