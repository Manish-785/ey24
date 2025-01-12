'use client'
import { useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/BudgetTracker.module.css';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

type Transaction = {
  description: string;
  amount: number;
  type: 'income' | 'expense';
};

export default function BudgetTracker() {
    const [transactions, setTransactions] = useState<Transaction[]>([
      { description: 'Salary', amount: 5000, type: 'income' },
      { description: 'Rent', amount: 1500, type: 'expense' },
      { description: 'Groceries', amount: 400, type: 'expense' },
      { description: 'Freelance Work', amount: 1000, type: 'income' },
      { description: 'Utilities', amount: 200, type: 'expense' }
    ]);
    const [newTransaction, setNewTransaction] = useState<Transaction>({ description: '', amount: 0, type: 'expense' });
  
    const handleAddTransaction = () => {
      if (newTransaction.description && newTransaction.amount) {
        setTransactions([...transactions, { ...newTransaction, amount: parseFloat(newTransaction.amount.toString()) }]);
        setNewTransaction({ description: '', amount: 0, type: 'expense' });
      }
    };
  
    const calculateTotals = () => {
      const totals = { income: 0, expense: 0 };
      transactions.forEach(({ type, amount }) => {
        if (type === 'income') {
          totals.income += amount;
        } else {
          totals.expense += amount;
        }
      });
      return totals;
    };
  
    const totals = calculateTotals();
  
    const chartData = {
      labels: ['Income', 'Expenses'],
      datasets: [
        {
          label: 'Budget Overview',
          data: [totals.income, totals.expense],
          backgroundColor: ['#4caf50', '#f44336'],
          borderWidth: 1,
        }
      ],
    };
  
    const chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'Income vs Expenses'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
  
    return (
      <>
        <Head>
          <title>Budget Tracker</title>
          <meta name="description" content="Track your budget and analyze your expenses and income." />
        </Head>
        <main className={styles.container}>
          <h1 className={styles.title}>Budget Tracker</h1>
  
          <div className={styles.addTransaction}>
            <h2 className={styles.subtitle}>Add Transaction</h2>
            <input
              type="text"
              placeholder="Description"
              value={newTransaction.description}
              onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
            />
            <input
              type="number"
              placeholder="Amount"
              value={newTransaction.amount}
              onChange={(e) => setNewTransaction({ ...newTransaction, amount: parseFloat(e.target.value) })}
            />
            <select
              value={newTransaction.type}
                        onChange={(e) => setNewTransaction({
                            ...newTransaction, type: e.target.value as 'income' | 
                            'expense'
               })}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
            <button onClick={handleAddTransaction}>Add</button>
          </div>
  
          <div className={styles.analytics}>
            <h2 className={styles.subtitle}>Analytics</h2>
            <Bar data={chartData} options={chartOptions} />
          </div>
  
          <div className={styles.transactionList}>
            <h2 className={styles.subtitle}>Transaction List</h2>
            <ul>
              {transactions.map((transaction, index) => (
                <li key={index}>
                  {transaction.description} - {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
  
          <div className={styles.summary}>
            <h2 className={styles.subtitle}>Summary</h2>
            <p>Total Income: ${totals.income.toFixed(2)}</p>
            <p>Total Expenses: ${totals.expense.toFixed(2)}</p>
            <p>Net Balance: ${(totals.income - totals.expense).toFixed(2)}</p>
          </div>
        </main>
      </>
    );
  }