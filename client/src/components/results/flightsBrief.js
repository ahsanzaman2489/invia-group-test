import React from 'react';
import moment from 'moment';

// just the footer of the page
export default class FlightsBrief extends React.Component {
    getDuration(time, date) {
        const ms = moment(date.A + " " + time.A, "MM/DD/YYYY HH:mm").diff(moment(date.D + " " + time.D, "MM/DD/YYYY HH:mm"));
        const d = moment.duration(ms);
        const hours = d.hours();
        const minutes = d.minutes();

        return <li>Duration: {hours}hours {minutes}mins</li>;
    }

    render() {
        const {details, searchQuery} = this.props;
        const {time, date} = details;
        return (

            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-md-6"><h3
                                className="panel-title">{details.origin.AP} > {details.destination.AP}</h3>
                                <p>{details.time.D} > {details.time.A}</p></div>
                            <div className="col-md-6"><h4 className="text-right">{details.price}$</h4></div>
                        </div>


                    </div>
                    <div className="panel-body">
                        <ul>
                            {this.getDuration(time, date)}
                            <li>Depart :{date.D}</li>
                            <li>Arrive :{date.A}</li>
                            <li>Airline :{details.airline}</li>
                            <li>Aircraft :{details.aircraft}</li>
                            <li>Flight number :{details.flightNumber}</li>
                            <li>Number of seats available :{details.availability}</li>
                        </ul>


                    </div>
                    <div className="panel-footer">Total : {searchQuery.adults * details.price}$
                        {searchQuery.adults > 1 && <span> for {searchQuery.adults} adults</span>}
                    </div>
                </div>
            </div>

        )
    }
}

