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
    renderDish(dish){
        if(this.state.selectedDish != null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.alt}></CardImg>
                    <CardBody> 
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return (
                <div></div>
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
                        <div className="col-md-5 m-1"></div>
                    </div>

            </div>
        )
    }
}
export default Menu