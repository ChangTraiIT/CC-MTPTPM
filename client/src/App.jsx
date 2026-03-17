import './assets/css/style.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Navbar />
        <Slider />
        <main className="main-content">
          <Welcome />
          <Projects />
        </main>
      </div>

      <Footer />
    </>
  )
}

export default App