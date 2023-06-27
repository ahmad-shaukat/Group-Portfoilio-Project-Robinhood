const GET_ACCOUNT = 'accounts/GET_ACCOUNT'
const ADD_ACCOUNT = 'accounts/UPDATE_ACCOUNT'

export const getAccount = (account) => {
    return {
        type: GET_ACCOUNT,
        payload: account
    }
}

export const addAccount = (account) => {
    return {
        type: ADD_ACCOUNT,
        payload: account
    }
}

export const getAccountInfo = () => async dispatch => {
    const response = await fetch('/api/accounts/info');
    
    if (response.ok) {
        const details = await response.json();
        await dispatch(getAccount(details))
        return details
    }
}
export const updateAccountInfo = (id, balance) => async dispatch => {
    const response = await fetch(`/api/accounts/${id}/update`)
    if (response.ok) {
        const details = await response.json()
        await dispatch(addAccount(details))
        return details
    }
}


export default function accountReducer(state={}, action) {
    let newState = {}
    switch(action.type) {
        case GET_ACCOUNT:
            return {info: action.payload}
        case ADD_ACCOUNT:
            newState = {...state};
            newState['info'] = action.payload
            return newState
        default:
            return state

    }
}