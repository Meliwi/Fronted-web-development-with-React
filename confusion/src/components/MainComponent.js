import React, { Component } from 'react';
//importamos el componente que acabamos de crear 
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';


class Main extends Component{
  constructor(props){
    super(props);
    //state siempre va dentro del constructor, traemos el estado de dishes
    this.state={
      dishes:DISHES,
      selectedDish:null
    };
  }
  
//set the state of selectedDish 
  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
 }
  render(){
    return (
      <div className="App">
        <Header/>
        <Menu dishes={this.state.dishes}
        onClick={(dishId)=>this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
        <Footer/>
      </div>
    );
  }
}

// 
export default Main;
