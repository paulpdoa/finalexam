import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const StudentDetails = () => {
// gets the id in the link provided and get the data from json
    const { id } = useParams();

    const { students:student, pending } = useFetch("http://localhost:8000/students/" + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch("http://localhost:8000/students/" + student.id, {
            method: "DELETE"
        })
        .then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="details-container">
            <h1 className="detail-title">Student Information</h1>
            {/* use article to display data for viewing */}
            {pending && <div className="loading"><h2>Loading students information...</h2></div>}
            { student && (
                <article>
                <p>This is { student.firstName } { student.lastName}'s information</p>
                <div className="student-details">
                    <div className="about-profile">
                        <div className="image-profile">
                            <img src="/student.png" alt="student"/>
                        </div>
                        <div className="about">
                            <h2>{ student.firstName } {student.middleInitial}. {student.lastName}</h2>
                        </div>
                        <div className="more-info">
                            <div className="about-me">
                                <p>Address: { student.address }</p>
                                <p>{ student.contactNumber }</p>
                                <p>{ student.emailAddress }</p>
                                <p>{ student.birthday }</p>
                                <p>{ student.age }</p>
                                <p>{ student.course }</p>
                                <p>{ student.notes }</p>
                                <div className="deletebtn">
                                    <button onClick={ handleDelete }>Delete</button>
                                </div>
                                
                            </div>
                        </div>
                    </div> 

                    {/* 
                    
                    */}
                </div>
                </article>
            ) }
        </div>
     );
}
 
export default StudentDetails;