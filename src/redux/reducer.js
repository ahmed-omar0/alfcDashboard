import { deleteWorker, openedNavbar } from './actionTypes';

export const initState = {
    navbarIsOpened: false,
    workers: [
        {
            "id": 0,
            "name": "Ahmed Omar",
            "position": "Front-End Developer",
            "age": 22,
            "start_date": "16/7/2021",
            "salary": 3000,
            "status": "Part-Time",
        },
        {
            "id": 1,
            "name": "Ahmed Aymen",
            "position": "Front-End Developer",
            "age": 22,
            "start_date": "10/1/2021",
            "salary": 4000,
            "status": "Full-Time",
        },
        {
            "id": 2,
            "name": "Omar Adel",
            "position": "Front-End Developer",
            "age": 25,
            "start_date": "20/8/2020",
            "salary": 7000,
            "status": "Full-Time",

        }
    ]
}
export const reducer = (state = initState, action) => {
    switch (action.type){
        case openedNavbar:
            return {
                ...state,
                navbarIsOpened: action.payload
            }
        case deleteWorker:
            return {
                ...state,
                workers:  state.workers.filter(worker => worker.id !== action.payload.id)
            }
        default: return state
    }
}