import React ,{Component} from 'react'
import Home  from './HomeComponent'
import Menu from './MenuComponent'
import {DISHES} from '../shared/dishes'
import DishDetail from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Route,Switch,Redirect} from 'react-router-dom';

class Main extends React.Component {
    constructor(props){
      super(props)
      this.state = {
       
        dishes : DISHES
      }
    }
   
  render(){
    const HomePage=()=>{
      return(
        <Home/>
      )
    }
    return (
      <div>
        <Header/>
          <switch>
              <Route path="/home" component={HomePage}/>
              <Route  exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
          </switch>
        <Footer/>
    </div>
    )
  }
}

export default Main;
