import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { PieChart } from "@mui/x-charts";

const Graph = () => {
    const [spent, setSpent] = useState(0);
    const [budget, setBudget] = useState(0);
    const [linechart, setLineChart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getDetails() {
            try {
                const expenseResponse = await fetch("http://localhost:8090/expense/history");
                if (!expenseResponse.ok) throw new Error('Error fetching expense data');
                const expenseData = await expenseResponse.json();

                const processedData = expenseData.map(item => ({
                    date: new Date(item.date).toLocaleDateString(),
                    amount: item.amount,
                }));
                setLineChart(processedData);

                const budgetResponse = await fetch('http://localhost:8090/budget/all');
                if (!budgetResponse.ok) throw new Error('Error fetching budget data');
                const budgetData = await budgetResponse.json();

                const current_data = budgetData.at(-1);
                const totalBudget = current_data.budget;
                setBudget(totalBudget);

                const totalExpenditure = expenseData.reduce((total, item) => total + item.amount, 0);
                setSpent(totalExpenditure);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        getDetails();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div style={{ display: 'flex', margin: '20px' }}>
            <div>
                <h4>Day-to-Day</h4>
                <LineChart width={410} height={300} data={linechart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                </LineChart>
            </div>
            <div style={{ marginLeft: '20px' }}>
                <h4>Month-to-Month</h4>
                <PieChart
                    series={[{
                        data: [
                            { id: 0, value: spent, label: 'Spent' },
                            { id: 1, value: budget - spent, label: 'Balance Left' },
                        ],
                    }]}
                    width={400}
                    height={200}
                />
            </div>
        </div>
    );
};

export default Graph;
