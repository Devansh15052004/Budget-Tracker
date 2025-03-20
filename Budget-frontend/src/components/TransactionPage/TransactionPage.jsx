// import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TransactionPage.css';
import TransactionTable from './TransactionTable';

const TransactionPage = () => {
    const navigate = useNavigate();
    return (
        <div className="transaction-page">
            <div className="transaction-header">
                <h3>TRANSACTION RECORDS</h3>
                <button className="add-expense-btn" onClick={() => navigate('/Add')}>Add Expense</button>
            </div>
            <hr />
            <TransactionTable />
        </div>
    );
};

export default TransactionPage;
