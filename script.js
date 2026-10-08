```javascript
"use strict";

// 1. Declare variables
let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// 2. Calculate the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// 3. Display the budget report
function displayBudgetReport(budget, expenses, balance) {
    console.log("===== SpendWise Budget Report =====");
    console.log("Monthly Budget: KSh " + budget);
    console.log("Total Expenses: KSh " + expenses);
    console.log("Remaining Balance: KSh " + balance);

    if (balance > 0) {
        console.log("Status: You are within your budget.");
    } else if (balance === 0) {
        console.log("Status: You have used your entire budget.");
    } else {
        console.log("Status: You have exceeded your budget!");
    }
}

// 4. Run the budget calculator
function runBudgetCalculator() {
    const budgetInput = prompt("Enter your monthly budget in KSh:");

    if (budgetInput === null) {
        console.log("Calculation cancelled.");
        return;
    }

    const expensesInput = prompt("Enter your total expenses in KSh:");

    if (expensesInput === null) {
        console.log("Calculation cancelled.");
        return;
    }

    monthlyBudget = Number(budgetInput);
    totalExpenses = Number(expensesInput);

    // 5. Validate the user's input
    if (
        budgetInput.trim() === "" ||
        expensesInput.trim() === "" ||
        !Number.isFinite(monthlyBudget) ||
        !Number.isFinite(totalExpenses) ||
        monthlyBudget < 0 ||
        totalExpenses < 0
    ) {
        alert("Please enter valid, non-negative numbers.");
        console.error("Invalid budget or expense amount.");
        return;
    }

    // 6. Calculate the remaining balance
    remainingBalance = calculateBalance(
        monthlyBudget,
        totalExpenses
    );

    // 7. Display the results
    displayBudgetReport(
        monthlyBudget,
        totalExpenses,
        remainingBalance
    );
}

// 8. Connect JavaScript to the Calculate Budget button
const calculateButton = document.getElementById("calculate-budget");

if (calculateButton) {
    calculateButton.addEventListener("click", runBudgetCalculator);
} else {
    console.error(
        'Calculator button not found. Check id="calculate-budget" in index.html.'
    );
}
```
