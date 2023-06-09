// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Props from './pages/Props';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Redux from './pages/Redux';
import ShopingCart from './pages/ShopingCart';
import CartPage from './shoping-cart/pages/CartPage';
import Authentication from './pages/Authentication';
import AuthRegister from './authentication/pages/AuthRegister';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="props" element={<Props />} />
          <Route path="redux" element={<Redux />} />
          <Route path="shopingcart" element={<ShopingCart />} />
          <Route path="cartpage" element={<CartPage />}></Route>
          <Route path="authentication" element={<Authentication />}></Route>
          <Route path="authregister" element={<AuthRegister />}></Route>
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
