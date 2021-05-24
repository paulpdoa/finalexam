import { useState } from 'react';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

const StudentList = () => {
    
    const { pending, students, handleDelete, error } = useFetch("http://localhost:8000/students");

    const[show,setShow] = useState(false);

    const [ sid, setId ] = useState([]);

    const [searchedStud,setSearchedStud] = useState('');

    // filter not working

    const handleSearch = (id) => {
    // get the value of the specific object
       const newStud = students[id];

       setSearchedStud(newStud.firstName + " " + newStud.lastName);

       console.log("The searched student is " + searchedStud);
       setShow(true);
    }
    

    return ( 
    <div className="student-main-container">
    {/* search */}
        <div className="search-container">
            <div className="search-box">
                <div>
                    <label htmlFor="search">Search Student</label><br/>
                    <input type="number" placeholder="Enter Student ID" onChange={ (e) => setId(e.target.value) }/>
                </div>
                <div className="search-btn">
                    <button onClick={ () => handleSearch(sid) }>Search</button>
                </div>
            </div>
            { show && <h3>The searched student is { searchedStud } with ID of { sid }</h3>}
            
        </div>

        <div className="student-main-container">
        { error && <div className="pending"><h1>{error}</h1></div> }
         { pending && <div className="pending"><h1>Loading...</h1></div> }
           { students && students.map(student => (
                    <div className="student-container" key={ student.id }>
                        <div className="student-box">
                            <p>Student ID: {student.id-1}</p>
                            <h1>{ student.firstName } { student.lastName }</h1>
                            <p>Course: { student.course }</p>
                            <Link to={`/students/${student.id}`}>
                                <button className="view-student">View</button>
                            </Link>
                        </div>
                    </div>
                )) }
        </div>
    </div>
     );
}
 
export default StudentList;