import { useEffect, useState } from 'react';
import axios from 'axios';
import './AddTransaction.css';  // Import the CSS file

const AddTransaction = () => {
    const [inputs, setInputs] = useState({
        subject: "",
        amount: "",
        place: "",
        date: "",
        description: "",
        category: "",
    });
    const [transactionCount, setTransactionCount] = useState(0);

    useEffect(() => {
        fetchTransactionCount();
    }, []);

    const fetchTransactionCount = async () => {
        try {
            const response = await fetch('http://localhost:8090/expense/history');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setTransactionCount(data.length);
        } catch (error) {
            console.error('Error fetching transaction count:', error);
        }
    };

    const handleAddExpenses = async () => {
        const payload = {
            id: transactionCount + 1,
            ...inputs,
            amount: parseFloat(inputs.amount),
        };

        try {
            await axios.post('http://localhost:8090/expense/add', payload);
            alert('Transaction added successfully!');
            setInputs({ subject: "", amount: "", place: "", date: "", description: "", category: "" });
            fetchTransactionCount();
        } catch (error) {
            console.error('Error adding transaction:', error);
            alert('Error adding transaction.');
        }
    };

    return (
        <div className="container">
            <h2>Add Transaction</h2>
            <input type="text" placeholder="Subject" value={inputs.subject} onChange={e => setInputs({ ...inputs, subject: e.target.value })} />
            <input type="number" placeholder="Amount" value={inputs.amount} onChange={e => setInputs({ ...inputs, amount: e.target.value })} />
            <input type="date" value={inputs.date} onChange={e => setInputs({ ...inputs, date: e.target.value })} />
            <input type="text" placeholder="Category" value={inputs.category} onChange={e => setInputs({ ...inputs, category: e.target.value })} />
            <input type="text" placeholder="Place" value={inputs.place} onChange={e => setInputs({ ...inputs, place: e.target.value })} />
            <input type="text" placeholder="Description" value={inputs.description} onChange={e => setInputs({ ...inputs, description: e.target.value })} />
            <button onClick={handleAddExpenses}>Add</button>
        </div>
    );
};

export default AddTransaction;
