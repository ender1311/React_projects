import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Toys } from './pages/Toys'
import { Electronics } from './pages/Electronics'
import { Tools } from './pages/Tools'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import {ShoppingCartProvider} from "./context/ShoppingCartContext"



function App() {
  return (
    
  <ShoppingCartProvider>
  <Navbar />
  
    <Container className="mb-4">
    <Routes>
      <Route path="/React_projects/ecommerce" element={<Home />} />
      <Route path="/React_projects/ecommerce/toys" element={<Toys />} />
      <Route path="/React_projects/ecommerce/electronics" element={<Electronics />} />
      <Route path="/React_projects/ecommerce/tools" element={<Tools />} />
      <Route path="/React_projects/ecommerce/about" element={<About />} />
    </Routes>
  </Container>
  
  </ShoppingCartProvider>
  
  )
}

export default App
