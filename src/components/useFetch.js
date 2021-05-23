import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [pending, setPending] = useState(true);

    const [students, setStudents] = useState(null);

    const handleDelete = (id) => {
        const newStudent = students.filter(student => student.id !== id);
        setStudents(newStudent);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setStudents(data);
                setPending(false);
            })
            .catch(err => {
                console.log(err.message);
            })
            },1000)
    },[])
    
        return { pending, students, handleDelete }
}
 
export default useFetch;