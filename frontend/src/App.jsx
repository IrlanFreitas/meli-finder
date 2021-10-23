
import React, {  useState } from 'react'
import "./assets/css/_reset.css"
import Routes from './routes/routes'
import Header from './components/Header'

export default function App() {

  const [search, setSearch] = useState("");
  const [breadCrumb, setBreadCrumb] = useState([]);

  return (
    <>
      <Header setSearch={setSearch} />
      <Routes search={search} setBreadCrumb={setBreadCrumb} breadCrumb={breadCrumb} />
    </>
  );
}

