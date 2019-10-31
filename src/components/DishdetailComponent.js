import React,{Component} from 'react';

import { Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle } from 'reactstrap';
class DishDetail extends Component {

    render(){
        if(this.props.selectedDish != null){
            return (
                <Card>
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.alt}></CardImg>
                    <CardBody> 
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
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
}

export default DishDetail