import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/index';
import {withRouter} from 'react-router-dom';

// higher order component
// used to display the component that is passed
// as argument only if the user is authenticated
// redirects to the index page if the user is unauthenticated
export default function (ComposedComponent) {
    class HOC extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        };


        render() {

            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {

        return {state};
    }

    function mapDispatchToProps(dispatch) {

        return {...bindActionCreators(Actions, dispatch)}
    }

    return withRouter(connect(mapStateToProps, mapDispatchToProps)(HOC));
}