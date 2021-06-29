import { openedNavbar } from './actionTypes';

const initState = {
    navbarIsOpened: false
}
export const reducer = (state = initState, action) => {
    switch (action.type){
        case openedNavbar:
            return {
                ...state,
                navbarIsOpened: action.payload
            }
        default: return state
    }
}