export default function (state = {}, action) {
    switch (action.type) {
        case 'to':
            return {
                ...state, "TO": {
                    data: action.data,
                    selected: ""
                }
            };
        case 'from':
            return {
                ...state, "FROM": {
                    data: action.data,
                    selected: ""
                }
            };
        case '@@redux-form/CHANGE':

            if (action.meta.DestinationSelected) {

                if (action.meta.field == "to") {
                    state.TO.data = [];
                    state.TO.selected = action.meta.destination;
                } else {
                    state.FROM.data = [];
                    state.FROM.selected = action.meta.destination;
                }

                return {...state};
            }
    }

    return state;
}