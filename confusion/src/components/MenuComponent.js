//Vamos a crear un nuevo componente 
import React, {Component} from 'react';
import {Media, Card,CargImg, CardImgOverlay,CardText,CardBody,CardTitle, CardImg} from 'reactstrap';

class Menu extends Component {
    //Definimos el constructor de este componente 
    constructor(props){
        super(props);
        //El estado del componente
        this.state = {
            selectedDish: null
        }
    }
    //cambiar el estado del componente así 
    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }
    renderDish(dish){
        if(dish != null){
            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} alt = {dish.name}/>
                    <CardBody>
                        <CardTitle >
                            {dish.name}
                        </CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div>
                </div>
            )
        }
    }
    render(){
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                        <CardImg width="100%" object src={dish.image} alt = {dish.name}/>
                        <CardImgOverlay body className="ml-5">
                            <CardTitle >
                                {dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}
//No olvidarse de exportar el componente del archivo 
export default Menu; 