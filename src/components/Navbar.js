const Navbar = () => {
    return ( 
        <div className="navbar-container">
            <div className="brand-title">
                <img src="/eac.png" alt="eaclogo"/>
                <h2>Emilio Aguinaldo College</h2>
            </div>
            <div className="navigation">
                <h2><a href="/">Home</a></h2>
                <h2><a href="/create">New Student</a></h2>
            </div>
        </div>
     );
}
 
export default Navbar;