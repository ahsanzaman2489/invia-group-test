import axios from 'axios';
import {ROOT_URL} from '../../config';


export function search(searchTerm, origin, context) {

    return (dispatch) => {

        axios.post(`${ROOT_URL}/airport/search`, {searchTerm})
            .then(response => {

                dispatch(
                    {
                        type: origin,
                        data: response.data
                    }
                );
            })
            .catch(response => {
                alertify.error("server is down");
            })
    }
}


export function searchFlights({to, from, departure, adults, page = 1, iPP = 5}) {

    page = parseInt(page);
    iPP = parseInt(iPP);
    return (dispatch) => {

        dispatch({type: "IS_LOADING", payload: true});
        axios.post(`${ROOT_URL}/flights/results`, {to, from, departure, adults, page, iPP})
            .then(response => {
                dispatch(
                    {
                        type: "RESULTS_FETCH_COMPLETE",
                        data: response.data
                    }
                );

                dispatch({type: "LOADING_COMPLETE", payload: false});
            })
            .catch(err => {
                alertify.error("server is down");
            })
    }
}
