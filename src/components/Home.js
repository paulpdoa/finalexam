import Header from "./Header";
import StudentList from "./StudentList";

const Home = () => {

    return ( 
        <div className="home-container">
            <Header title="School of Engineering and Technology Students" />
            
            <div className="list-container">
               <StudentList /> 
            </div>   

        </div>
     );
}
 
export default Home;