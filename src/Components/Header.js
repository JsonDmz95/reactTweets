const Header = () => {
  return ( 
    <header className="side-bar">
        <nav>
            <a href="#" className="brand-icon" title="Twitter - Avocado"><i className="fab fa-twitter-square"></i></a>
            <button
              className="add-btn"
            ><i className="fas fa-plus"></i></button>
        </nav>
    </header>
   );
}
 
export default Header;