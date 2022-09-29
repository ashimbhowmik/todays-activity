import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navber from './components/Navber/Navber';


function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
