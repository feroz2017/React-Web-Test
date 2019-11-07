import React from 'react';

import { Card,CardBody,CardImg,CardText,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'

const renderDetail=(dish)=>{
    
        return (
           
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardBody> 
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
}
const renderComments=(comments)=>{
    
    if(comments!=null){
        return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {
                            comments.map((comment)=>{
                                return(
                                    <li key={comment.id}>
                                        <p>{comment.comment}</p>
                                        <p>-- {comment.author}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
        )    
    }
}
const DishDetail = (props)=>{
    return (

        <div className="container">
         
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
              <div className="row">
                <div className="col-md-5 m-1"> 
                        {renderDetail(props.dish)}
                </div>
                <div className="col-md-5 m-1">
                       {renderComments(props.comments)} 
                </div>
            </div>
        </div>
    )
}
export default DishDetail