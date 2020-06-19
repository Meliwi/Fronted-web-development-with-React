import React, { Component } from 'react';
//importamos el componente que acabamos de crear 
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {DISHES} from '../shared/dishes';
import {Switch,Route, Redirect} from 'react-router-dom';

class Main extends Component{
  constructor(props){
    super(props);
    //state siempre va dentro del constructor, traemos el estado de dishes
    this.state={
      dishes:DISHES
    };
  }
  
//set the state of selectedDish 

  render(){
    const HomePage=() =>{
      return(
        <Home/>
      );
    }
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path ="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
          <Redirect  to ="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

// 
export default Main;
