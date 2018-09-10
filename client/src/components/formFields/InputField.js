import React from 'react';

export default field => {

    const selectionHandler = (event) => {

        field.meta.dispatch({
            payload: event.target.innerHTML, type: "@@redux-form/CHANGE", meta: {
                form: field.meta.form,
                field: field.id,
                persistentSubmitErrors: false,
                touch: false,
                DestinationSelected: true,
                destination: event.target.id
            }
        });
    };

    const renderSearchResults = (results) => {
        if (!results) return;
        return results.map(function (item, index) {
            return (<li key={index} id={item.AP} onClick={selectionHandler}>{item.APN}</li>)
        });
    };

    return (

        <div className="row">
            <div className="form-group col-md-6 col-md-offset-3">
                <label htmlFor={field.id}>{field.label}</label>
                <input {...field.input} id={field.id} type={field.type} className="form-control"/>
                {field.results && <ul className="searchResults">
                    {renderSearchResults(field.results.data)}
                </ul>}
                {field.meta.touched &&
                field.meta.error &&
                <span className="text-danger">{field.meta.error}</span>}

            </div>
        </div>
    );
};