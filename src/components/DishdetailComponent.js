import React,{Component} from 'react';

import { Card,CardBody,CardImg,CardText,CardTitle } from 'reactstrap';
class DishDetail extends Component {
    renderComments(dish){
        console.log(dish)
        if(dish!=null){
            let lists = dish.comments.map(comt =>{
                return (
                    <li>
                    <div>
                        <p>{comt.comment}</p>
                        <p>--{comt.author} {comt.date}</p>
                    </div>
                </li>
                )
            } )
            return(
                <div> 
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                            {lists}
                    </ul>
                </div>  
            )
        }
        
    }
    renderDetail(dish){
        if(dish!= null){
            console.log(dish)
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
        else{
                return (<div></div>)
        }
    }
    render(){
        return (
            <div className="container">
                  <div className="row">
                    <div className="col-md-5 m-1"> 
                            {this.renderDetail(this.props.dish)}
                    </div>
                    <div className="col-md-5 m-1">
                           {this.renderComments(this.props.dish)} 
                    </div>
                </div>
            </div>
        )
    }
}

export default DishDetail