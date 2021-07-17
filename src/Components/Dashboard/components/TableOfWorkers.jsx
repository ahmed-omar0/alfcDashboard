import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delteWorker } from '../../../redux/action';
import AddWorkersForm from './AddWorkersForm';

function TableOfWorkers() {
    const formRef = useRef();
    const dispatch = useDispatch()
    const workers = useSelector(state => state.workers);
    const items = workers.map(worker => {
        return (
            <tr key={worker.id}>
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
                    {worker.salary}$
                </td>
                <td className="p-2">
                    {worker.status}
                </td>
                <td className="p-2 actions">
                    <button className="btn btn-primary p-1 mx-1" onClick={() => dispatch(delteWorker(worker.id))}>
                        Delete
                    </button>
                    <button className="btn btn-primary p-1">
                        Change Details
                    </button>
                </td>
            </tr>
        )
    })
    const toggleForm = () => {
        formRef.current.classList.toggle('hidden');
    }
    return (
        <section className="workers-table">
            <h2 className="text-muted mb-3 mt-4 pb-2 fs-5">Our Workers</h2>
            <table className="m-auto my-2 w-100">
                <thead>
                    <tr>
                        <th className="p-1 text-muted">Name</th>
                        <th className="p-1 text-muted">Position</th>
                        <th className="p-1 text-muted">Age</th>
                        <th className="p-1 text-muted">Start Date</th>
                        <th className="p-1 text-muted">Salary</th>
                        <th className="p-1 text-muted">Status</th>
                        <th className="p-1 text-muted">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
                <tfoot className="text-center">
                    <tr>
                        <td colSpan="7">
                            <button className="btn btn-primary" onClick={toggleForm}>
                                Add More
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <AddWorkersForm formRef={formRef} toggleForm={toggleForm}/>
        </section>
    )
}

export default TableOfWorkers
