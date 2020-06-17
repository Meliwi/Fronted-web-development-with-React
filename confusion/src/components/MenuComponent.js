import React from 'react';
import {Card,CardImgOverlay,CardText,CardBody,CardTitle, CardImg} from 'reactstrap';

    // we return the card in the function component 
    function rederMenuItem({dish,onClick}){
        return(
            <Card onClick={()=>this.props.onClick(dish.id)}>
            <CardImg width="100%" object src={dish.image} alt = {dish.name}/>
            <CardImgOverlay body className="ml-5">
                <CardTitle >
                    {dish.name}
                </CardTitle>
            </CardImgOverlay>
        </Card>
        );
    }
    //Another way of implementing a functional component 
    const Menu = (props) => {

    }
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">

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
 
export default Menu ;