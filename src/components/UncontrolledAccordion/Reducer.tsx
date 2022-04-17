type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'



export const reducer = (state:boolean, action:ActionType) => {
    if (action.type === TOGGLE_COLLAPSED){
        return !state
    }
    return state
}