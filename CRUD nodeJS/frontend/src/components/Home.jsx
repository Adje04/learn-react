import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

export default function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:3001/")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

  

    const deleteStudent = (student) => {
       
        axios.delete(`http://localhost:3001/students/${student}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }



    return (

        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <h2>Student List</h2>
                <div className="d-flex justify-content-end">
                    <Link to={'/create-student'} className="btn btn-success" >Add Student</Link>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((student, index) => {
                            return (
                                <tr key={index} >
                                    <td> {student.id} </td>
                                    <td> {student.name} </td>
                                    <td> {student.email} </td>
                                    <td>
                                        <button className="btn btn-sm btn-info">View</button>
                                        <button className="btn btn-sm btn-primary mx-2">Edit</button>
                                        <button className="btn btn-sm btn-danger" onClick={() => deleteStudent(student.id)} >Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                        )}

                    </tbody>
                </table>

            </div>
        </div>

    )
}
