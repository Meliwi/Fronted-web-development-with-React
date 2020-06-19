import React, { Component } from 'react';
//importamos el componente que acabamos de crear 
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {Switch,Route, Redirect} from 'react-router-dom';

class Main extends Component{
  constructor(props){
    super(props);
    //state siempre va dentro del constructor, traemos el estado de dishes
    this.state={
      dishes:DISHES,
      comments: COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
    };
  }
  
//set the state of selectedDish 

  render(){
    const HomePage=() => {
      return(
        <Home 
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
    );
    }
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path ="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
          <Route exact path ="/contactus" component={Contact}/>
          <Redirect  to ="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

// 
export default Main;
