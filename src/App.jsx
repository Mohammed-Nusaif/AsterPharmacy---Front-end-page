import './App.css'
import About from './components/About'
import Brands from './components/Brands'
import Deals from './components/Deals'
import Footer1 from './components/Footer1'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Query from './components/Query'
import Review from './components/Review'
import Spotlight from './components/Spotlight'
import Why from './components/Why'

function App() {

  return (
    <>
     <Navbar />
     <Spotlight/>
     <Product/>
     <Deals/>
     <Brands/>
     <About/>
     <Why/>
     <Review />
     <Query/>
     <Footer1/>

    </>
  )
}

export default App
