const Reducer = (state =[], action) => {
    switch (action.type) {

        case 'savfav':
                return [...state,action.payload]      
        default:
            return state
    }
}

export default Reducer
