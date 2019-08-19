import React, {Component} from 'react';
import '../../styles/video/rating.css';

class Rate extends Component{

    constructor(props){
        super(props);

        this.state = {
            rating: this.props.rating || null,
            temp_rating: null
        } 
    }     

    rate = (rating) => {
        this.setState({
          rating: rating,
          temp_rating: rating
        });
    }

    star_over = (rating) => {        
        let temp_rating = this.state.rating;

        this.setState({
          rating: rating,
          temp_rating: temp_rating
        });
    }

    star_out = () => {       
        this.setState({ rating: this.state.temp_rating });
    }

    renderStar = () => {
        var stars = [];

        for(var i = 0; i < 5; i++) {
            var klass = 'star-rating__star';
            
            if (this.state.rating >= i && this.state.rating != null) {
              klass += ' is-selected';
            }
      
            stars.push(
              <label
                className={klass}
                onClick={this.rate.bind(this, i)}
                onMouseOver={this.star_over.bind(this, i)}
                onMouseOut={this.star_out}>
                ★
              </label>
            );
        }

        return stars;
    }

    render(){
        return(
            <div className="star-rating">
                {this.renderStar()}
            </div>
        );
    }
}


export default Rate;