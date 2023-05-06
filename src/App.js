import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Books from './pages/Books'
import Journalism from './pages/Journalism'
import Events from './pages/Events'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/js-website/' element={<Home />} />
          <Route path='/js-website/events' element={<Events />} />
          <Route path='/js-website/books' element={<Books />} />
          <Route path='/js-website/journalism' element={<Journalism />} />
          <Route path='/js-website/about' element={<About />} />
          <Route path='/js-website/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
