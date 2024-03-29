import React, { Component } from 'react'
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from '../tourData';

export default class TourList extends Component {
    state={
        tours: tourData
    };
    removeTour = id => {
        const { tours } = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        });
    };
    render() {
        const {tours} = this.state; // put the state (tours array) into a variable named tours
       
        return (
            <section className="tourlist">
        {/* loop through array with map method and its callback function */}
               {tours.map(tour => {
                   return <Tour key={tour.id} tour={tour} 
                   removeTour={this.removeTour}/>;
               })}
            </section>
        );
    }
}
