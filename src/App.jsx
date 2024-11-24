import './App.css'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './componentes/Home'
import Login from './componentes/Login/Login'
import NOT_FOUND from './componentes/NOT_FOUND'
import { UserStorage } from './UserContext'
import User from './componentes/User/User'
import ProtectedRouter from './componentes/Helper/ProtectedRouter'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />
            <Route path="/*" element={<NOT_FOUND />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
