import React from 'react'
// Form
import { Formik, Form } from "formik";
import * as Yup from 'yup';
// Icons
import { AiFillCloseCircle } from 'react-icons/ai'
// Redux
import { useDispatch } from 'react-redux'
import { addWorker } from '../../../../redux/action';
// Components
import Input from './Input';


function AddEmployeesForm(props) {
    const dispatch = useDispatch()
    const initValues = {
        "name": "",
        "position": "",
        "age": "",
        "start_date": "",
        "salary": "",
        "status": ""
    }
    const validation = Yup.object({
        "name":       Yup.string().trim("Remove Start And End Spaces").matches(/[a-z]/gi,"It Takes Only Letters").required("Name Is Required"),
        "position":   Yup.string().trim("Remove Start And End Spaces").matches(/[a-z]/gi,"It Takes Only Letters").required("Position Is Required"),
        "age":        Yup.number("It Must Be A Number").positive("It Must Be A Positive Number").min(20, "The Age Can Not Be Lower Than 20").max(50, "The Age Can Not Be Larger Than 50").required("Age Is Required"),
        "start_date": Yup.date("Date Must Be Like That Sat Jul 17 2021").required("Date Is Required"),
        "salary":     Yup.number("It Must Be A Number").positive("It Must Be A Positive Number").min(3000, "It Can Not Be Under 3000").max(15000, "It Can Not Be Above 15000").required("Salary Is Required"),
        "status":     Yup.string().trim("Remove Start And End Spaces").matches(/[a-z]/gi,"It Takes Only Letters").required("Statues Is Required")
    })
    const onSbmit = values => {
        dispatch(
            addWorker(
                Math.ceil(Math.random() * 1000),
                values.name, 
                values.position, 
                values.age, 
                values.start_date,
                values.salary,
                values.status)
            )
        props.formRef.current.classList.toggle('hidden')
    }
    return (
        <Formik
            initialValues={initValues}
            validationSchema={validation}
            onSubmit={onSbmit}
        >
            <div className="pop-up-form hidden" ref={props.formRef}>
                <AiFillCloseCircle onClick={props.toggleForm}/>
                <Form>
                    <Input type="text" name="name" label="Name"/>
                    <Input type="text" name="position" label="Position"/>
                    <Input type="text" name="age" label="Age"/>
                    <Input type="text" name="start_date" label="Start Date"/>
                    <Input type="text" name="salary" label="Salary"/>
                    <Input type="text" name="status" label="Status"/>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </Form>
            </div>
        </Formik>
    )
}

export default AddEmployeesForm
