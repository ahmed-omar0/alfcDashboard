import { openedNavbar, workerDeleted, workerEdited, workerAdded} from './actionTypes';

export const initState = {
    navbarIsOpened: false,
    workers: [
        {
            "id": 0,
            "name": "Ahmed Omar",
            "position": "Front-End Developer",
            "age": 22,
            "start_date": "16/7/2021",
            "salary": "3000$",
            "status": "Part-Time",
        },
        {
            "id": 1,
            "name": "Ahmed Aymen",
            "position": "Front-End Developer",
            "age": 22,
            "start_date": "10/1/2021",
            "salary": "4000$",
            "status": "Full-Time",
        },
        {
            "id": 2,
            "name": "Omar Adel",
            "position": "Front-End Developer",
            "age": 25,
            "start_date": "20/8/2020",
            "salary": "7000$",
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
        case workerDeleted:
            return {
                ...state,
                workers:  state.workers.filter(worker => worker.id !== action.payload.id)
            }
        case workerEdited:
            const worker = state.workers.filter(worker => worker.id === action.payload.id)
            worker.name = action.payload.name
            worker.position = action.payload.position
            worker.age = action.payload.age
            worker.start_date = action.payload.start_date
            worker.salary = action.payload.salary
            worker.status = action.payload.status
            const isEqual = (obj1, obj2) => {
                const obj1Keys = Object.keys(obj1)
                for (const objKey of obj1Keys) {
                    if (obj1[objKey] !== obj2[objKey]){
                        return false 
                    } else {
                        return true
                    }
                }
            }
            return {
                ...state,
                workers: !isEqual(state.workers, action.payload) ? [...state.workers.filter(worker => worker.id !== action.payload.id), action.payload]
                            : [...state.workers, action.payload]

}
        case workerAdded:
            return {
                ...state,
                workers: [...state.workers, action.payload]
            }
        default: return state
    }
}