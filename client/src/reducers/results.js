export default function (state = {
    loading: true
}, action) {
    switch (action.type) {
        case 'IS_LOADING':
            return {...state, loading: true};
        case 'LOADING_COMPLETE':
            return {...state, loading: false};
        case 'RESULTS_FETCH_COMPLETE':
            return {...state, ...action.data};

    }

    return state;
}