import {FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE} from './contants';

const URL = "https://swapi.co/api/";

export function getPeopleFromAPI() {
    return (dispatch) => {
        dispatch(getPeople());
        fetch(`${URL}people`)
            .then(response => response.json())
            .then(response => dispatch(getPeopleSuccess(response)))
            .catch(error => dispatch(getPeopleFailure(error)))
    };
}

function getPeople() {
    return {
        type: FETCHING_PEOPLE
    };
}

function getPeopleSuccess(data) {
    return {
        type: FETCHING_PEOPLE_SUCCESS,
        data
    };
}

function getPeopleFailure(data) {
    return {
        type: FETCHING_PEOPLE_FAILURE,
        data
    };
}