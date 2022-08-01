import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
  <div className="App">
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/products' element={<ProductList/>}/>
      <Route exact path='/product' element={<Product/>}/>
    </Routes>
    
    
  </div>
  
  
  );
}

export default App;
