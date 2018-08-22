import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro'
class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isfetching:false
    };

    onSeriesInputChange = e =>{
        this.setState({seriesName: e.target.value, isfetching:true});
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({
                series: json,
                isfetching:false
            }));
    }

    render() {
        const {series, seriesName, isfetching} = this.state;
        return ( 
            <div>
              <Intro message="Here You can find all of your most loved series" />
                <div>
                    <input value={seriesName} type='text' onChange={this.onSeriesInputChange}/>
                </div>
                {
                    !isfetching && series.length === 0 && seriesName.trim() === '' 
                    &&
                    <p>Please enter series name into the input</p>
                }

                {
                    !isfetching && series.length === 0 && seriesName.trim() !== '' 
                    &&
                    <p>No TV series have been found with this name</p>
                }
                {
                    isfetching && <Loader />
                }
                {
                    !isfetching &&  <SeriesList list={this.state.series} />
                }
           
            </div>
        )
    }
}

export default Series;