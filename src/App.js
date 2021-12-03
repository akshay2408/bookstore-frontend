import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header';
import Signin from './Signin'
import Dashboard from './Dashboard';
import CreateBook from './CreateBook';
import Favourite from './Favourite';
import Edit from './Edit';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/create_book" element={<CreateBook />} />
        <Route exact path="/favourite" element={<Favourite />} />


      </Routes>
    </Router>
  );
}

export default App;
