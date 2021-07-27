import React, { useRef } from 'react'
// Components
import AddEmployeesForm from './components/AddEmployeesForm';
import TableRows from './components/TableRows';

function TableOfEmployees() {
    const formRef = useRef();
    const toggleForm = () => {
        formRef.current.classList.toggle('hidden');
    }
    return (
        <section className="workers-table">
            <h2 className="text-muted mb-3 mt-4 pb-2 fs-5">Our Employees</h2>
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
                    <TableRows/>
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
            <AddEmployeesForm formRef={formRef} toggleForm={toggleForm}/>
        </section>
    )
}

export default TableOfEmployees
