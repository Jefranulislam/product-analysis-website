import './App.css';
import Header from './Compnents/Header/Header';
import Home from './Compnents/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Reviews from './Compnents/Reviews/Reviews';
import Dashboard from './Compnents/Dashboard/Dashboard';
import Nopage from './Compnents/Nopage/Nopage';
import useReview from './hooks/useReview';
import Blogs from './Compnents/Blogs/Blogs';
import About from './Compnents/About/About';

function App() {
  const { reviews, setReviews } = useReview();
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Nopage></Nopage>}></Route>
      </Routes>

    </div>
  );
}

export default App;
