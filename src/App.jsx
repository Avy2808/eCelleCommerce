import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom/dist'
import Navbar from './components/navbar'
import Cart from './pages/cart/cart'
import Shop from './pages/shop/shop'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom/dist'
import store from './redux/store'
import { Provider } from 'react-redux'
import Login from './pages/login/login'

function App() {
  const width = window.innerWidth

  function getLocation(location) {
    console.log('location: ', location)
    return location
  }
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Navbar></Navbar>
          <main style={{fontSize: `${getLocation() === '/cart' && width <= 500 ? '0.7em !important' : ''}`}}>
            <Routes>
              <Route path={'/'} element={<Shop/>}></Route>
              <Route path={'/login'} element={<Login/>}></Route>
              <Route path={'/cart'} element={<Cart/>}></Route>
            </Routes>
          </main>
        </Router>
      </Provider>
    </div>
  )
}

export default App
