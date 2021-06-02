export const initialState = {
    term: null,
    logged: false,
    response: [
        {"id":1,"nom":"Balin","prenom":"Roger","adresse":"Nancy","classe":"1"},
    {"id":2,"nom":"Dupont","prenom":"Henri","adresse":"Thionville","classe":"1"},
    {"id":3,"nom":"Robinot","prenom":"Martin","adresse":"Lyon","classe":"2"},
    {"id":4,"nom":"Riper","prenom":"Bernard","adresse":"Reims","classe":"1"},
    {"id":5,"nom":"Martinez","prenom":"Laure","adresse":"Rouen","classe":"2"}
    ]
};

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
    SET_LOGIN_TERM: "SET_LOGIN_TERM"
};

const reducer = (state, action) => {
    console.log(action);
    //listen any dispatch action
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term, 
            };
        case actionTypes.SET_LOGIN_TERM:
            return {
                ...state,
                logged: true,
            };

        default:
            return state;
    }
}

export default reducer;