import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Items from './pages/Items';

function Layout() {
  return (
    <>
      <Header />
      <main className='min-h-[80vh]'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router basename='/react-shop-project/'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='categories' >
            <Route index element={<Categories />}></Route>
            <Route path=":category" element={<Category />}></Route>
          </Route>
          <Route path='browse' element={<Browse />}></Route>
          <Route path='items/:id' element={<Items />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
