// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbarm } from './components/Navbarm'
import { Home } from './components/Home'


function App() {
  return (
    <div className="App">
      <Navbarm/>
      <Home/>
    </div>
  );
}

export default App;
