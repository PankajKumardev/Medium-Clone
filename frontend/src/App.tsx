import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'

function App() {
  return (
    <>
    <BrowserRouter>
    <nav>
          {/* Navigation Links */}
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/Blog/1">Blog Post 1</Link> {/* Example Blog Post Link */}
            </li>
          </ul>
        </nav>
    <Routes>
    <Route  path='/signup' element={<Signup/>}  />
    <Route path='/signin' element={<Signin/>} />
    <Route path='/Blog/:id' element={<Blog/>} />
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
