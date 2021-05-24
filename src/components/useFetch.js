import { useState, useEffect } from 'react';
const useFetch = (url) => {

    const [pending, setPending] = useState(true);
    const [students, setStudents] = useState(null);
    const[error,setError] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setStudents(data);
                setPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setPending(false);
            })
            },1000)
            
    },[])
       
        return { pending, students, error }
}
 
export default useFetch;