import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';

class CarouselComponent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="carousel-container">
                <Carousel>
                    <CarouselItem>
                        hello
                    </CarouselItem>
                </Carousel>
            </div>
        )
    }
}

export default CarouselComponent;
