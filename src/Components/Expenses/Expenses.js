import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filterdYear, setFilterdYaer] = useState("2020");
  const filterChangeHandler = (selectedYaer) => {
    setFilterdYaer(selectedYaer);
  };
  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });
 
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterdExpenses}/>
        <ExpenseList items = {filterdExpenses}/>
      </Card>
    </div>
  );
};
export default Expenses;
