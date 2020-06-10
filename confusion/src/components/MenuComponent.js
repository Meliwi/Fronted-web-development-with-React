//Vamos a crear un nuevo componente 
import React, {Component} from 'react';
import {Media} from 'reactstrap';

class Menu extends Component {
    //Definimos el constructor de este componente 
    constructor(props){
        super(props);
        //El estado del componente
        this.state = {

    }
}
    render(){
        //Propiedad de la lista 
        //Lo que hace esta constante es igual una funcion que accede a dishes con props y usa 
        //map para returnar una lista en la App 

        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag = "li">
                        <Media left middle>
                            <Media object src={dish.image} alt = {dish.name}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading >
                                {dish.name}
                            </Media>
                            <p>
                                {dish.description}
                            </p>
                        </Media>
                    </Media>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>

            </div>
        );
    }
}
//No olvidarse de exportar el componente del archivo 
export default Menu; 