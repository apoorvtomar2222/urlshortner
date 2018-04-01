const initialState = {
    search: ''
}
export const homeReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'FETCH_SUCCESS': {
            return {
                ...state,
                search: action.data
            }
        }
        case 'FETCH_URL_SUCCESS': {
            return {
                ...state,
                search: action.data
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}