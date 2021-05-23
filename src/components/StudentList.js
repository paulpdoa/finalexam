import { useState, useEffect } from 'react';
import useFetch from './useFetch';

const StudentList = () => {
    
    const { pending, students, handleDelete } = useFetch("http://localhost:8000/students");

    useEffect(() => {
        console.log(students);
    },[])


    const [ id, setId ] = useState([]);

    // filter not working

    const handleSearch = (id) => {
       
    }

    return ( 
    <div className="student-main-container">
        <div className="search-container">
            <div className="search-box">
                <div>
                    <label htmlFor="search">Search Student</label><br/>
                    <input type="number" placeholder="Enter Student ID" onChange={ (e) => setId(e.target.value) }/>
                </div>
                <div className="search-btn">
                    <button onClick={ () => handleSearch(id) }>Search</button>
                </div>
            </div>
        </div>

        <div className="student-container">
         { pending && <div className="pending">Loading...</div> }
           { students && students.map(student => (
                    <div className="student-container" key={ student.id }>
                        <div className="student-box">
                            <p>Student ID: 21-0{ student.id }-1876</p>
                            <h1>{ student.name }</h1>
                            <p>Course: { student.course }</p>
                            <button onClick={ () => handleDelete(student.id) }>Delete</button>
                        </div>
                    </div>
                )) }
        </div>
    </div>
     );
}
 
export default StudentList;