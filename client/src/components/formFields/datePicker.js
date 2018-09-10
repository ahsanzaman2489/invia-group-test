import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


const renderDatePicker = ({input, todayButton, id, label, meta: {touched, error}}) => {

    return (
        <div className="row">
            <div className="form-group col-md-6 col-md-offset-3">
                <label>{label}</label>
                <DatePicker {...input}
                            dateForm="MM/DD/YYYY"
                            selected={input.value ? moment(input.value) : null}
                            minDate={moment()}
                            placeholderText="Click to select a date"
                            className="form-control "
                            todayButton='Today'
                            format={null}
                />
                {touched && error && <span className="text-danger">{error}</span>}
            </div>
        </div>
    )
};

export default renderDatePicker;