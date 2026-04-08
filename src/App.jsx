import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Header from './components/Header';
import Footer from './components/Footer';

function Layout() {
  return (
    <>
      <Header />
      <main className=''>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/browse' element={<Browse />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
