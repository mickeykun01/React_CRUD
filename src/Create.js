import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import { addUser } from "./Slice/UserReducer";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate()
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [gender, setgender] = useState('')
    const [status, setstatus] = useState('')

    // const [formData, setFormData] = useState([])

    const users = useSelector((state)=> state.users);
    const dispatch = useDispatch()

    // const handleChange = (e) => {
    //   setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value,
    //   });
    // };
    
    // handlesubmit
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addUser({id :users[users.length-1].id + 1 , firstname , lastname , email , gender , status}))
        navigate('/')
    }

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  gender: "",
  status: "",
};

const validateForm = (values)=>{
    const errors = {};

    // firstname
    if(!values.firstname){
        errors.firstname = 'Required';
    }

    // lastname
    if(!values.lastname){
        errors.lastname = 'Required';
    }

    //email
    if(!values.email){
        errors.email = 'Required'
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email Address';
    }

    //gender
    if(!values.gender){
        errors.gender = 'Required'
    }

    // status
    if(!values.status){
        errors.status = 'Required'
    }
}
// console.log(gender);
// console.log(status);
 return (
    <div className="container align-items-center justify-content-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h1>Formik Form Validation</h1>
        <Formik 
            initialValues={initialValues}
            validate={validateForm} 
            handleSubmit = {handleSubmit}
        >

          <Form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="firstname">Firstname </label>
              <Field type="text" className='form-control' id="firstname" name="name"  onChange={e => setfirstname(e.target.value)} />
              <ErrorMessage name="name" component="div" className="text-danger"/>
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Lastname</label>
              <Field type="text" className='form-control' id="lastname" name="name"  onChange={e => setlastname(e.target.value)}/>
              <ErrorMessage name="name" component="div" className="text-danger"/>
            </div>
            {/* onChange={e => setemail(e.target.value)} */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" className='form-control' id="email" name="email" value={email} onChange={e => setemail(e.target.value)} />
              <ErrorMessage name="email" component="div" className="text-danger"/>
            </div>

            <div className="form-group" onChange={e => setgender(e.target.value)}>
              <label>Gender</label>
                <div>
                    <label className="mr-3">
                     <Field type='radio' name='gender' value='male' id="male"/>
                     {' '}
                     Male
                    </label>
                    <label>
                     <Field type='radio' name='gender' value='female' id="female"/>
                     {' '}
                     Female
                    </label>
                </div>
                <ErrorMessage name="gender" component="div" className="text-danger"/>
            </div>

            <div className="form-group" onChange={e => setstatus(e.target.value)}>
              <label>Status</label>
              <div>
                <label className="mr-3">
                    <Field type='radio' name='status' value='active' />
                    {' '}
                    Active
                </label>
                <label>
                    <Field type='radio' name='status' value='inactive'/>
                    {' '}
                    Inactive
                </label>
              </div>
              <ErrorMessage name="status" component="div" className="text-danger"/>
            </div>

            <button className="btn btn-primary">SUBMIT</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Create;
