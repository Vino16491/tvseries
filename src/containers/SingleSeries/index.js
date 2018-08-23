import React, {Component} from 'react';
import Loader from '../../components/Loader'
class SingleSeries extends Component{

    state = {
        show:null
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response => response.json())
            .then(json => this.setState({show:json}));
    }

    render(){
        const {show} = this.state;
        console.log(show)
        return(
            <div>
                {(show === null)? <Loader/> : 
                    <div>
                        <p>{show.name !== null && show.name}</p>
                        <p>{show.premiered !== null && ('Premiered -' + show.premiered) }</p>
                       {(show.rating.average !== null) && <p>Rating - {show.rating.average}</p> } 
                        <p>{show._embedded.episodes.length !== 0 && 'Episodes - ' + show._embedded.episodes.length}</p>
                      { show.image.medium !== '' && <img src={show.image.medium}></img>}
                    </div>
                }
            </div>
        )
    }
}

export default SingleSeries;