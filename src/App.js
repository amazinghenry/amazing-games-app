import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <Home />
    <Footer />
    </BrowserRouter>
  );
}

export default App;
