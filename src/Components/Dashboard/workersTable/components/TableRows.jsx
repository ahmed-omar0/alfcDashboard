import { useRef } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { deleteWorker, editWorker } from '../../../../redux/action';

function TableRows() {
    const rowsRef = useRef([])
    rowsRef.current = []
    const dispatch = useDispatch()
    const workers = useSelector(state => state.workers);
    const addRefs = el => {
        if(el && !rowsRef.current.includes(el)){    
            rowsRef.current.push(el)
        }
    }
    // Change Alert
    const handelAlert = index => {
        rowsRef.current[index].childNodes[0].classList.toggle('hidden')
        rowsRef.current[index].childNodes[0].classList.toggle('d-none')
    }

    // Change Details
    const changeDetails = index => {
        if(rowsRef.current[index].childNodes[0].hasAttribute('contenteditable')){
            for (let i = 0; i < 6; i++) {
                rowsRef.current[index].childNodes[i].removeAttribute('contenteditable')   
            }
            rowsRef.current[index].childNodes[7].childNodes[1].classList.toggle('hidden')
            rowsRef.current[index].childNodes[7].childNodes[2].classList.toggle('hidden')
        }else{
            for (let i = 0; i < 6; i++) {
                rowsRef.current[index].childNodes[i].setAttribute('contenteditable', 'true')
            }
            rowsRef.current[index].childNodes[7].childNodes[1].classList.toggle('hidden')
            rowsRef.current[index].childNodes[7].childNodes[2].classList.toggle('hidden')
        }
    }
    // Set Items
    const items = workers.map((worker, index) => {
        return (
            <tr key={worker.id} ref={addRefs}>
                <td className="p-2 hidden d-none">
                    <div className="edit-alert bg-primary p-2 rounded text-white">
                        <span className="fs-6">Start Editing Then Save Changes</span>
                    </div>
                </td>
                <td className="p-2">
                    {worker.name}
                </td>
                <td className="p-2">
                    {worker.position}
                </td>
                <td className="p-2">
                    {worker.age}
                </td>
                <td className="p-2">
                    {worker.start_date}
                </td>
                <td className="p-2">
                    {worker.salary}
                </td>
                <td className="p-2">
                    {worker.status}
                </td>
                <td className="p-2 actions">
                    <button className="btn btn-primary p-1 mx-1" onClick={() => dispatch(deleteWorker(worker.id))}>
                        Delete
                    </button>
                    <button className="btn btn-primary p-1" onClick={() => {
                        changeDetails(index)
                        handelAlert(index)
                    }}>
                        Change Details
                    </button>
                    <button className="btn btn-primary p-1 hidden" onClick={() => {
                            changeDetails(index)
                            dispatch(editWorker(worker.id, 
                                rowsRef.current[index].childNodes[1].innerHTML,
                                rowsRef.current[index].childNodes[2].innerHTML,
                                rowsRef.current[index].childNodes[3].innerHTML,
                                rowsRef.current[index].childNodes[4].innerHTML,
                                rowsRef.current[index].childNodes[5].innerHTML,
                                rowsRef.current[index].childNodes[6].innerHTML,
                            ))
                            handelAlert(index)
                        }}>
                        Save Changes
                    </button>
                </td>
            </tr>
        )
    })
    return (
        <>
            {items}
        </>
    )
}

export default TableRows
