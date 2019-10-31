import React, { Component } from 'react';
import { Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle } from 'reactstrap';

class Menu extends React.Component {
    constructor(props){
        super(props)
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
            </div>
        )
    }
}
export default Menu