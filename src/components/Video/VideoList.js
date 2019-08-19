import React, {Component} from 'react';
import '../../styles/video/listing.css';
import Rate from './Rate';

const temp = [
    {id : 1, url : 'https://tinypng.com/images/social/website.jpg', rate: 4},
    {id : 2, url : 'https://tinypng.com/images/social/website.jpg', rate: 3},
    {id : 3, url : 'https://tinypng.com/images/social/website.jpg', rate: 2},
    {id : 4, url : 'https://tinypng.com/images/social/website.jpg', rate: 1}
];


class VideoList extends Component{

    renderList(){
        return temp.map((item) => {
            return(
                <div className="card" key={item.id}>
                    <div className="image">
                        <img alt="video-thumbail" className="video-thumbail" src={item.url} />
                    </div>
                    <div className="extra">
                        Rating:
                        <div className="ui star rating">
                            <Rate rating={item.rate}/>
                        </div>                        
                    </div>
                </div> 
            );
        });  
    }

    renderRate(rate){

        let stars = [];
        for(let i = 1; i <= rate; i++){
            stars.push(<i className="icon active"/>);
        }

        for(let i = 4; i > rate; i--){
            stars.push(<i className="icon"/>);
        }        
        return stars;
    }

    render(){
        return(
            <div className="ui four cards">
                {this.renderList()}
            </div>
        );
    }
}

export default VideoList;