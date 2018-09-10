import React from 'react';
import FlightsBrief from '../../components/results/flightsBrief';
import Pagination from '../../components/Pagination';
import queryString, {stringify} from 'query-string';
import loadingImage from '../../assets/images/loading.gif';


class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.searchFlights({...this.state.query});
    }

    renderResults(results, searchQuery) {
        const items = results;
        if (items && items.length > 0) {
            return items.map(function (item, index) {
                return <FlightsBrief key={index} details={item} searchQuery={searchQuery}/>;
            });
        } else {
            return <div>No Results Found on this date</div>
        }
    }

    linkHandler = (path, itemToChange,) => {
        const {history, searchFlights} = this.props;
        const query = this.state.query;

        if (itemToChange == null) return;
        else {
            query.page = itemToChange.toString();
            var queryString = stringify(query, {encode: false});


            history.push({
                pathname: '/flights/results',
                search: "?" + queryString,
            });
            searchFlights(query)
        }
    }

    render() {

        const {state, location, history} = this.props;
        const {results} = state;


        this.state = {query: queryString.parse(location.search)};


        return (

            <div className="container">
                {results.loading &&
                <div className="loading"><img src={loadingImage} alt=""/></div>}
                <h2 className="text-center">Results for {this.state.query.departure}</h2>

                <div className="row">
                    {results.items && this.renderResults(results.items, this.state.query)}
                </div>
                <div className="row">
                    {results.items && results.items.length > 0 &&
                    <Pagination options={results.paging} path={'/flights/results'}
                                linkHandler={this.linkHandler}/>}
                </div>

            </div>

        )
    }

}


export default Results;