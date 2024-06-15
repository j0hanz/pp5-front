import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="flex-grow-1"></main>
      <Footer />
    </div>
  );
}

export default App;
