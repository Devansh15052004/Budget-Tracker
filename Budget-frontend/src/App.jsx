import Homepage from "./components/HomePage/HomePage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout";
import TransactionPage from "./components/TransactionPage/TransactionPage";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import Tasks from "./components/TasksPage/Tasks";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Transaction" element={<TransactionPage/>}/>
          <Route path="/Add" element={<AddTransaction/>}/>
          <Route path="/Budget" element={<Tasks/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
