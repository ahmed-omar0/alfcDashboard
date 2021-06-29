import { openedNavbar } from './actionTypes';

export const toggleNavbar = navbarIsOpened => {
    return {
        type: openedNavbar,
        payload: navbarIsOpened
    }
}