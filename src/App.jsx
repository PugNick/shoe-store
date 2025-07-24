import IsMobileOr from './components/IsMobileOr';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {


  return (
    <CartProvider>
      <div className="App">
        <IsMobileOr />
      </div>
    </CartProvider>
  );
}

export default App;
