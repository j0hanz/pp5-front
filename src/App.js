import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/NewPost';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/newpost" element={<Post />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
