import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import products from './data/products';

import HomePage from './modules/HomePage.jsx';
import GalleryPage from './modules/GalleryPage.jsx';
import OrderPage from './modules/OrderPage.jsx';
import TopicsPage from './modules/TopicsPage.jsx';
import Navigation from './modules/Navigation.jsx';

import SalesPage from './modules/sales/SalesPage.jsx';
import SaleAdd from './modules/sales/SaleAdd.jsx';
import SaleEdit from './modules/sales/SaleEdit.jsx';

import { GiMountainClimbing } from "react-icons/gi";

function App() {
  const [sale, setSale] = useState([]);

  return (
    <>

      <header>
        <h1>Audrey <i><GiMountainClimbing /></i>Do</h1>
      </header>

      <Router>
      <Navigation/>
        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/gallery" element={<GalleryPage />}></Route>
              <Route path="/order" element={<OrderPage products={products} />}></Route>
              <Route path="/topics" element={<TopicsPage />}></Route>
              <Route path="/navigation" element={<Navigation />}></Route>

              <Route path="/sales" element={<SalesPage setSale={setSale} />} /> 
              <Route path="/create" element={<SaleAdd />} />
              <Route path="/update" element={<SaleEdit saleToEdit={sale} />} /> 
            </Routes>
          </section>
        </main>
      </Router>

    <footer>
      <p>2025 Audrey Do</p>
    </footer>
    
    </>
  )
}

export default App
