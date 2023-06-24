import React,{useState} from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch} from "react-redux";
import { updateUser } from './Slice/UserReducer';
import { useNavigate } from 'react-router-dom';


const Update = () => {
    const {id} = useParams()
    const users = useSelector((state)=> state.users);
    
    // checking
    const existingUser = users.filter(f => f.id == id)
    const {firstname , lastname , email , gender , status} = existingUser[0];

    const [ufirstname, setfirstname] = useState(firstname)
    const [ulastname, setlastname] = useState(lastname)
    const [uemail, setemail] = useState(email)
    const [ugender, setgender] = useState(gender)
    const [ustatus, setstatus] = useState(status)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate=(event)=>{
        event.preventDefault();
        
        dispatch(updateUser({
            id : id,
            firstname : ufirstname,
            lastname : ulastname,
            email : uemail,
            gender : ugender,
            status : ustatus
        }))
        navigate('/')
    }
  return (
    <div>
      <div className="container align-items-center justify-content-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h1>update new users</h1>
        <Formik>

          <Form onSubmit={handleUpdate}>

            <div className="form-group">
              <label htmlFor="firstname">Firstname </label>
              <Field type="text" className='form-control' id="firstname" name="name" value={ufirstname} onChange={e => setfirstname(e.target.value)} />
              <ErrorMessage name="name" component="div" className="text-danger"/>
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Lastname</label>
              <Field type="text" className='form-control' id="lastname" name="name" value={ulastname}  onChange={e => setlastname(e.target.value)}/>
              <ErrorMessage name="name" component="div" className="text-danger"/>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" className='form-control' id="email" name="email" value={uemail} onChange={e => setemail(e.target.value)}/>
              <ErrorMessage name="email" component="div" className="text-danger"/>
            </div>

            <div className="form-group" onChange={e => setgender(e.target.value)} >
              <label>Gender</label>
                <div>
                    <label className="mr-3">
                     <Field type='radio' name='gender' value='male'/>
                     {' '}
                     Male
                    </label>
                    <label>
                     <Field type='radio' name='gender' value='female'  />
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
    </div>
  )
}

export default Update
