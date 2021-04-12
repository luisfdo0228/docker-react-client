import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbarm } from './components/Navbarm'
import { Home } from './components/Home'

class App extends React.Component {
  
  constructor() {
    super()
    this.childHome = React.createRef()
  }


  handleSearch = (e) => {
    this.childHome.current.getIechoApi(e.target.value)
  }

  
  render() {
    return (
      <div className="App">
        <Navbarm handleSearch={this.handleSearch}/>
        <Home ref={this.childHome}/>
      </div>
    );
  }
}

export default App;
