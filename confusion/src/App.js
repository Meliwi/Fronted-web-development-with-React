import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
//importamos el componente que acabamos de crear 
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes';

class App extends Component{
  constructor(props){
    super(props);
    //state siempre va dentro del constructor, traemos el estado de dishes
    this.state={
      dishes:DISHES
    };
  }
  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
        <div className='container'> 
          <NavbarBrand href="/">
            Ristorant con Fusion 
          </NavbarBrand>
        </div> 
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
