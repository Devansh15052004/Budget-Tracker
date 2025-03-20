import { useState, useEffect } from "react";
import axios from "axios";
import "./Tasks.css";

const Tasks = () => {
  const [inputs, setInputs] = useState({
    Month: "",
    Date: "",
    Amount: "",
  });

  const [data, setData] = useState([]);
  const [transactionCount, setTransactionCount] = useState(0);

  useEffect(() => {
    fetchTransactionCount();
  }, []);

  const fetchTransactionCount = async () => {
    try {
      const response = await fetch("http://localhost:8090/budget/all");
      if (!response.ok) throw new Error("Network response was not ok");
      const fetchedData = await response.json();
      setData(fetchedData);
      setTransactionCount(fetchedData.length);
    } catch (error) {
      console.error("Error fetching transaction count:", error);
    }
  };

  const handleAddBudget = async () => {
    const payload = {
      id: transactionCount + 1,
      month: inputs.Month,
      budget: parseFloat(inputs.Amount),
      date: inputs.Date,
    };

    try {
      const response = await axios.post(
        "http://localhost:8090/budget/addBudget",
        payload
      );
      alert("Transaction added successfully!");
      setInputs({ Month: "", Amount: "", Date: "" });
      await fetchTransactionCount();
    } catch (error) {
      console.error(
        "Error adding transaction:",
        error.response ? error.response.data : error.message
      );
      alert("Error adding transaction.");
    }
  };

  return (
    <div className="tasks-container">
      <h2 className="tasks-title">Budget</h2>
      <hr className="tasks-divider" />
      <div className="tasks-content">
        <div className="tasks-transactions">
          {data.map((item, index) => (
            <div key={index} className="tasks-transaction">
              <span>{item.month}</span>
              <span>{new Date(item.date).toGMTString()}</span>
              <span>{item.budget}</span>
            </div>
          ))}
        </div>

        <div className="tasks-form-container">
          <div className="tasks-input-group">
            <label>Month:</label>
            <input
              type="text"
              placeholder="Month"
              value={inputs.Month}
              onChange={(e) => setInputs({ ...inputs, Month: e.target.value })}
            />
          </div>

          <div className="tasks-input-group">
            <label>Date:</label>
            <input
              type="date"
              value={inputs.Date}
              onChange={(e) => setInputs({ ...inputs, Date: e.target.value })}
            />
          </div>

          <div className="tasks-input-group">
            <label>Amount:</label>
            <input
              type="number"
              placeholder="Amount"
              value={inputs.Amount}
              onChange={(e) => setInputs({ ...inputs, Amount: e.target.value })}
            />
          </div>

          <button onClick={handleAddBudget}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
