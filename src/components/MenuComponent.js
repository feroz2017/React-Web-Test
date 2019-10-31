import React, { Component } from 'react';
import { Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle } from 'reactstrap';

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {      
             
        }
    }
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
                })
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
    render(){
        const menu = this.props.dishes.map(dish => {
            return(
                <div key={dish.id} className='col-md-5 m-1'>
                    <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}>      
                        </CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>                           
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return(
            <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                    <div className="row">
                        <div className="col-md-5 m-1"> 
                        </div>
                        <div className="col-md-5 m-1">
                                {this.renderComments(this.props.dish)}
                        </div>
                    </div>

            </div>
        )
    }
}
export default Menu