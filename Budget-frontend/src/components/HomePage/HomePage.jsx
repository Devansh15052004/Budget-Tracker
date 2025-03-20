import { useState, useEffect } from "react";
import BasicTable from "./TransactionTable";
import QuickAcess from "./QuickAcess";
import Graph from "../Graph";
import "./Homepage.css";
const Homepage = () => {
  const [spent, setSpent] = useState(0);
  const [budget, setBudget] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDetails() {
      try {
        const expenseResponse = await fetch(
          "http://localhost:8090/expense/history"
        );
        if (!expenseResponse.ok) throw new Error("Error fetching expense data");
        const expenseData = await expenseResponse.json();

        const budgetResponse = await fetch("http://localhost:8090/budget/all");
        if (!budgetResponse.ok) throw new Error("Error fetching budget data");
        const budgetData = await budgetResponse.json();

        const current_data = budgetData.at(-1);
        const totalBudget = current_data.budget || 0;
        setBudget(totalBudget);

        const totalExpenditure = expenseData.reduce(
          (total, item) => total + item.amount,
          0
        );
        setSpent(totalExpenditure);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getDetails();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="homepage-container">
      <div className="overview-container">
        <h3>Overview</h3>
        <hr />
        <div className="overview-item">
          <span>Budget:</span>
          <span className="budget">{budget}</span>
        </div>
        <div className="overview-item">
          <span>Balance Left:</span>
          <span className="balance">{budget - spent}</span>
        </div>
        <div className="overview-item">
          <span>Total Spent:</span>
          <span className="spent">{spent}</span>
        </div>
      </div>

      <div className="transaction-container">
        <BasicTable />
      </div>
      <QuickAcess />
      <div className="graph-container">
        <Graph />
      </div>
    </div>
  );
};

export default Homepage;
