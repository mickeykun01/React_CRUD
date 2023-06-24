import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './Slice/UserReducer';


const Home = () => {
    const users = useSelector((state)=> state.users);
    const [pop, setpop] = useState('')
    // console.log(users);

    // handle delete function
    const dispatch = useDispatch();

    const handleDelete = (id)=>{
        dispatch(deleteUser({id: id}))
        setpop(
            alert('do u really want to delete')
        )
    }
    
  return (
    <div className='container'>
        <h2>React CRUD App</h2>
        <Link to="/create" className='btn btn-success my-3'>Create +</Link> 
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Action</th>
                    
                </tr>
            </thead>
                {users.map((user , index)=>(
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.status}</td>

                        <td>
                            <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary mr-3'>Edit</Link>
                            <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-space btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))}
            <tbody>
                
            </tbody>
            
        </table>     
    </div>
  )
}

export default Home
