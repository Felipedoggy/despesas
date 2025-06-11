import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ExpenseForm from './components/ExpenseForm.jsx';
import ExpenseTable from './components/ExpenseTable.jsx';
import Filter from './components/Filter.jsx';
import api from "./services/api";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  //const [filters, setFilters] = useState({ tipo: "", data: "" });

  const fetchExpenses = async () => {
    const response = await api.get("/despesas");
    setExpenses(response.data);
    setFiltered(response.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (expense) => {
    await api.post("/despesas", expense);
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await api.delete(`/despesas/${id}`);
    fetchExpenses();
  };

  const handleFilter = ({ tipo, data }) => {
    let dataFiltrada = [...expenses];
    if (tipo) dataFiltrada = dataFiltrada.filter(e => e.tipo === tipo);
    if (data) dataFiltrada = dataFiltrada.filter(e => e.data === data);
    setFiltered(dataFiltrada);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-fill container my-4">
        <h2 className="mb-4">Gerenciar Despesas</h2>
        <ExpenseForm onAdd={addExpense} />
        <Filter onFilter={handleFilter} />
        <ExpenseTable expenses={filtered} onDelete={deleteExpense} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
