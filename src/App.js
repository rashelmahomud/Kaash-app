import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Compornents/Home/Home';
import Footer from './Compornents/Shared/Footer';
import Header from './Compornents/Shared/Header';
import Courses from './Compornents/Pages/Courses';
import About from './Compornents/Pages/About'
import Blogs from './Compornents/Pages/Blogs'
import Contact from './Compornents/Pages/Contact'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/courses' element={<Courses></Courses>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
