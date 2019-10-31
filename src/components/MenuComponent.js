import React, { Component } from 'react';
import { Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle } from 'reactstrap';

import DishdetailsComponent from './DishdetailComponent'
class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedDish : null
        }
    }
    onDishSelect(dish){
        this.setState({
            selectedDish:dish
        })
    }
    renderComments(dish){
            
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
                    <Card onClick={()=>this.onDishSelect(dish)}>
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
                        <DishdetailsComponent dish={this.state.selectedDish} selectedDish = {this.state.selectedDish}/>
                        </div>
                        <div className="col-md-5 m-1">
                                {this.renderComments(this.state.selectedDish)}
                        </div>
                    </div>

            </div>
        )
    }
}
export default Menu