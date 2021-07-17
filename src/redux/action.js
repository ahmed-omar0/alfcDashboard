import { openedNavbar, deleteWorker } from './actionTypes';

export const toggleNavbar = navbarIsOpened => {
    return {
        type: openedNavbar,
        payload: navbarIsOpened
    }
}
export const delteWorker = id => {
    return {
        type: deleteWorker,
        payload: {
            id
        }
    }
}