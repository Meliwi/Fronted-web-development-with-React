import React from 'react';
import {Card,CardText, CardImgOverlay,CardBody,CardTitle, CardImg} from 'reactstrap';


    //Task 2 - function renderDish() 
    function RenderDish({dish}) {
        return(
          <Card dish={dish}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        );
      }
      //Task 3 - function renderComments()
      //Now we change the format of hour 
      function RenderComments({comments}){
          return(
              <ul className="list-unstyled">
                  {comments.map((comment)=>{
                      return(
                          <li key={comment.id}>
                              <p>
                                  {comment.comment}
                              </p>
                              <p>
                                  -- {comment.author},
                                  {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                              </p>
                              
                          </li>
                      );
                  })}
              </ul>
          );
      }

    //using functions here
    //the render function now is a function component
    const DishDetail =(props) =>  {
        console.log('Dishdetail Component render invoked');
        if (props.dish!=null){
            return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>
                            Comments
                        </h4>
                        <RenderComments comments ={props.dish.comments}/>
                    </div>
                </div>
            </div>
            );
        }
        else{
            return(
                <div>
                </div>
            );
        }
    }

// exporting DishDetail 
export default DishDetail;