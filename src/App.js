import './App.css';
import Header from './Compnents/Header/Header';
import Home from './Compnents/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Reviews from './Compnents/Reviews/Reviews';
import Dashboard from './Compnents/Dashboard/Dashboard';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
