import React, {Component} from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Carousel from '../../components/Carousel/carousel';
import Karl from './karl'



class home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Carousel/>                
                <Footer/>
                <Karl/>
            </div>


        )
    }

}

export default home