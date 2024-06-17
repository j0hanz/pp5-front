import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/NewPost';

// Main App component
function App() {
  return (
    // Router component to enable routing in the application
    <Router>
      <div className="app">
        {/* NavBar component for the top navigation */}
        <NavBar />
        <main className="flex-grow-1">
          {/* Routes component to define the different routes in the application */}
          <Routes>
            {/* Route for the Home page */}
            <Route path="/" element={<Home />} />
            {/* Route for the About page */}
            <Route path="/about" element={<About />} />
            {/* Route for the New Post page */}
            <Route path="/newpost" element={<Post />} />
          </Routes>
        </main>
        {/* Footer component for the bottom footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
