import { openedNavbar, workerDeleted, workerEdited, workerAdded } from './actionTypes';

export const toggleNavbar = navbarIsOpened => {
    return {
        type: openedNavbar,
        payload: navbarIsOpened
    }
}
export const deleteWorker = id => {
    return {
        type: workerDeleted,
        payload: {
            id
        }
    }
}
export const editWorker = (id, name, position, age, start_date, salary, status) => {
    return {
        type: workerEdited,
        payload: {
            id,
            name,
            position,
            age,
            start_date,
            salary,
            status
        }
    }
}
export const addWorker = (id, name, position, age, start_date, salary, status)  => {
    return {
        type: workerAdded,
        payload: {
            id,
            name,
            position,
            age,
            start_date,
            salary,
            status
        }
    }
}