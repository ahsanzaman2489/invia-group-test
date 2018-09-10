import React from 'react';
import {reduxForm, Field} from 'redux-form';
import * as actions from '../../actions/index';
import InputField from '../../components/formFields/InputField';
import SelectField from '../../components/formFields/select';
import DatePicker from '../../components/formFields/datePicker';
import {connect} from "react-redux";

class Home extends React.Component {

    searchHanlder = (event) => {
        const value = event.target.value;
        const id = event.target.id;
        if (value.length >= 2) {
            this.props.search(value, id, this);
        }
    };


    submit(values) {
        const state = this.props.state;


        values.to = state.search.TO['selected'];
        values.from = state.search.FROM['selected'];

        this.props.history.push({
            pathname: '/flights/results',
            search: "?from=" + values.from + "&to=" + values.to + "&departure=" + values.departure + "&adults=" + values.adults,
        });


    };

    render() {

        const {handleSubmit, state} = this.props;
        const adultsAllowedOptions = [
            {name: 1, value: 1},
            {name: 2, value: 2},
            {name: 3, value: 3},
            {name: 4, value: 4},
            {name: 5, value: 5},
            {name: 6, value: 6},
            {name: 7, value: 7},
            {name: 8, value: 8},
        ];
        return (
            <div>
                <div className="tab-content">
                    <form onSubmit={handleSubmit(this.submit.bind(this))} autoComplete="off">
                        <div className="row">
                            <Field
                                name="from"
                                id="from"
                                label="from"
                                component={InputField}
                                type="text"
                                onChange={this.searchHanlder}
                                results={state.search.FROM}


                            />
                            <Field
                                name="to"
                                id="to"
                                label="to"
                                component={InputField}
                                type="text"
                                onChange={this.searchHanlder}
                                results={state.search.TO}

                            />
                            <Field name="departure"
                                   id="departure"
                                   label="departure"
                                   type="text"
                                   component={DatePicker}

                            />
                            <Field name="adults"
                                   id="adults"
                                   label="adults"
                                   component={SelectField}
                                   options={adultsAllowedOptions}
                            />
                            <div className="col-xs-4 col-xs-offset-4">
                                <input type="submit" className="btn btn-primary btn-block" value="Search Flight"/>
                            </div>
                        </div>
                    </form>


                </div>
            </div>
        )
    }
}


function validate(values) {
    const errors = {};


    if (!values.from) {
        errors.from = 'Please, enter an Departure Airport!';
    }

    if (!values.to) {
        errors.to = 'Please, enter an Destination Airport!';
    }

    if (!values.departure) {
        errors.departure = 'Please, select Departure Dates';
    }
    if (!values.adults) {
        errors.adults = 'Please, Numbers of Passengers';
    }

    return errors;
}

export default connect(null, actions)(reduxForm({
    form: 'Booking',
    validate
}, null, actions)(Home));