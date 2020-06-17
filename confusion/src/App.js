import React, { Component } from 'react';
//importamos el componente que acabamos de crear 
import Main from './components/MainComponent';
import './App.css';


class App extends Component{
 
  render(){
    return (
      <div>
        <Main/>
      </div>
    );
  }
}

export default App;
