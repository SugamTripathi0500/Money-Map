import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth } from "./pages/auth/index";
import { ExpenseTracker } from "./pages/expense-tracker/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/expense-tracker"  element={<ExpenseTracker />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
