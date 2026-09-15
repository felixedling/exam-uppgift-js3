import './App.css'
import { Routes, Route } from 'react-router-dom';
import Transactions from './pages/Transactions';
import Home from './pages/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/alltransactions" element={<Transactions />} />
      {/*<Route path="/allexpenses" element={<Expenses />}/>*/}
    </Routes>
  )
}

export default App
