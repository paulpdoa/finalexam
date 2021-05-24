import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [firstName, setFirstName] = useState('');
    const [middleInitial, setMiddleInitial] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [birthday, setBirthday] = useState('');
    const [course, setCourse] = useState('');
    const [note, setNote] = useState('');

    // age of students
    const[age,setAge] = useState(0);

    useEffect(() => {
        let now = new Date().getFullYear();
        let bday = new Date(birthday).getFullYear();
        let newAge = now-bday;
        setAge(newAge);
    })
   


   
    // for redirections
    const history = useHistory();

    const [loading, isLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        isLoading(true);

        const student = { 
            firstName, 
            middleInitial, 
            lastName, 
            address, 
            contactNumber, 
            emailAddress, 
            birthday,
            age,
            course,
            note
        }
        setTimeout(() =>{
            fetch("http://localhost:8000/students",{
                method: 'POST',
                headers: { 'Content-Type':"application/json"},
                // converts the object to a json string
                body:JSON.stringify(student)
              })
              .then(() => {
                  console.log("New blog added");
                  isLoading(false);
                  alert("The student has been added");
                //   redirects to home page
                  history.push('/');
              })
        },1000);
       
    }

    return ( 
        <div className="create-container">
            <h1 className="create-title">Add New Student</h1>
            <p>Please Fill in the following:</p>
            <form onSubmit={handleSubmit} className="form-container-main">
                <div className="form-container">
                    <div className="create-input row-one">
                        <div className="input-box">
                            <label htmlFor="firstname">First Name:</label><br/>
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="firstname" placeholder="Enter your first name" required/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="middleinitial">Middle Initial:</label><br/>
                            <input type="text" value={middleInitial} onChange={(e) => setMiddleInitial(e.target.value)} name="middleinitial" placeholder="Enter your middle inital" required/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="lastname">Last Name:</label><br/>
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastname" placeholder="Enter your last name" required/>
                        </div>
                    </div>
                    <div className="create-input row-two">
                        <label htmlFor="address">Address:</label><br/>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} name="address" placeholder="Enter your address" required/>
                    </div>
                    <div className="create-input row-three">
                        <div className="input-box">
                            <label htmlFor="contactnumber">Contact Number:</label><br/>
                            <input type="number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} name="contactnumber" placeholder="Enter your contact number" required/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="email">Email Address:</label><br/>
                            <input type="email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} name="email" placeholder="Enter your email" required/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="birthday">Birthday:</label><br/>
                            <input className="bday" value={birthday} onChange={(e) => setBirthday(e.target.value)} type="date" name="birthday" placeholder="Enter your first name" required/>
                        </div>
                    </div>
                    <div className="create-input row-four">
                        <div className="input-box">
                            <label htmlFor="course">Course:</label><br/>
                            <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} name="course" placeholder="Enter your course" required/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="notes">Notes:</label><br/>
                            <input className="note" value={note} onChange={(e) => setNote(e.target.value)} type="text" name="notes" placeholder="Enter your note" required/>
                        </div>
                    </div>
                    <div className="submit-box">
                        {!loading && <button className="submitbtn">Add Student</button>}
                        {loading && <button disabled className="submitbtn">Adding Student...</button>}
                    </div>
                </div>   
            </form>
            <input type="hidden" value={age} onChange={ (e) => setAge(e.target.value) } />
        </div>
     );
}
 
export default Create;