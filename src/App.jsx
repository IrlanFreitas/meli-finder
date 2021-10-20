
import React, {  useState } from 'react'
import "./assets/css/_reset.css"
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes/routes'
import Header from './components/Header'


export default function App() {

  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header setSearch={setSearch} />
      <Routes search={search} />
    </Router>
  );
}

