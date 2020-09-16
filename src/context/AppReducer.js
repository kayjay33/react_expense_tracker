// the bare minimum we need for our reducer
export default (state, action) => {
    switch(action.type) { // this switched is based on the type which is basically like an id
        case 'DELETE_TRANSACTION':
        return {
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state; // when it's default, we simply want to return our state as is
    }
}