import Header from "./Header";
import StudentList from "./StudentList";

const Home = () => {

   

    return ( 
        <div className="home-container">
            <Header title="Student Information" />
            
            <div className="list-container">
               <StudentList /> 
            </div>   

        </div>
     );
}
 
export default Home;