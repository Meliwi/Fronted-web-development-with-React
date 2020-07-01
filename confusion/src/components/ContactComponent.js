import React, {Component} from 'react';
import {Breadcrumb,BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

// We need to turn this component into a class component, because 
// we need to store the state of the form in the state of our react component 
class Contact extends Component {

    // Instanciamos el constructor, definimos los estados que reflejan los estados de información del formulario 
    constructor(props){
        super(props);
        this.state ={
            firstname: '',
            lastname: '',
            telnum:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            message:''
        }  
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem >
                            <Link to='/home'>
                                Home
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Contact Us
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>
                            Contact Us 
                        </h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>
                            Send us Your Feeback
                        </h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>
                                    First Name 
                                </Label> 
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" 
                                    placeholder="Fist Name"
                                    value={this.state.firstname}>
                                        
                                    </Input>
                                </Col>       
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;