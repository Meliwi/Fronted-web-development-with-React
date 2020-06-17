import React, {Component} from 'react';
import {Card,CargImg, CardImgOverlay,CardText,CardBody,CardTitle, CardImg} from 'reactstrap';


class Menu extends Component {
    //Definition of constructor of this component 
    constructor(props){
        super(props);

    }
    
    render(){
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.props.onClick(dish.id)}>
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
        console.log('Menu component render is invoked');
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
} 
export default Menu; 