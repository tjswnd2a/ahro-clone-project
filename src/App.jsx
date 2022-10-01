import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./component/Header"
import MainView from "./component/MainView"
import ProductPage from './component/product/ProductPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainView />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
