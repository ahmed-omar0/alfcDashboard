import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { AiFillCloseCircle } from 'react-icons/ai'


function AddWorkersForm({...props}) {
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
        console.log(values);
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
                    <div className="form-control d-flex flex-column">
                        <label className="mb-1" htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name"/>
                        <ErrorMessage component="span" className="error" name="name"/>
                    </div>
                    <div className="form-control d-flex flex-column">
                        <label className="mb-1" htmlFor="position">Position</label>
                        <Field type="text" id="position" name="position"/>
                        <ErrorMessage component="span" className="error" name="position"/>
                    </div>
                    <div className="form-control d-flex flex-column">
                        <label className="mb-1" htmlFor="age">Age</label>
                        <Field type="text" id="age" name="age"/>
                        <ErrorMessage component="span" className="error" name="age"/>
                    </div>
                    <div className="form-control d-flex flex-column">
                        <label className="mb-1" htmlFor="start_date">Start Date</label>
                        <Field type="text" id="start_date" name="start_date"/>
                        <ErrorMessage component="span" className="error" name="start_date"/>
                    </div>
                    <div className="form-control d-flex flex-column">
                        <label className="mb-1" htmlFor="salary">Salary</label>
                        <Field type="text" id="salary" name="salary"/>
                        <ErrorMessage component="span" className="error" name="salary"/>
                    </div>
                    <div className="form-control d-flex flex-column">
                        <label className="mb-1" htmlFor="status">Status</label>
                        <Field type="text" id="status" name="status"/>
                        <ErrorMessage component="span" className="error" name="status"/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </Form>
            </div>
        </Formik>
    )
}

export default AddWorkersForm
