import './App.css';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Laptops from './pages/Laptops';
import Accessories from './pages/Accessories';
import Cart from './pages/Cart';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage/>}></Route>
        <Route path="products" element={<ProductPage/>}></Route>
        <Route path="laptops" element={<Laptops/>}></Route>
        <Route path="accessories" element={<Accessories/>}></Route>
        <Route path="cart" element={<Cart/>}></Route>

      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

const Root = () => {
  return (
    <Layout>
      <Outlet/>
    </Layout>
  )
}

export default App;
