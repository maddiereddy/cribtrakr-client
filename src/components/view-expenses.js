import React from 'react';
import ExpenseCard from './expense-card';
import SearchForm from './search-form';

export default function ViewExpenses(props) {
    return (
      <div class="container">
        <section className="search-section">
          <SearchForm />
          <button className="add-expense">Add Expense</button>
        </section>
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
      </div>
    );
};

ViewExpenses.defaultProps = {
    name: '',
    image: '',
};