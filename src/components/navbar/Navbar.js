import { Link } from 'react-router-dom';
// import mainLogo from '../../assets/game-logo.png';
import './navbar.css';

const Navbar = ({ searchTerm, setSearchTerm, handleSearch }) => {

    return ( 
        <nav className="nav-bar container">
            <Link to='/' className='main-logo'> AmazingGames </Link>

            <form onSubmit = {handleSearch} className='search-form'>
                <input
                type="search"
                className="form-control search-input"
                placeholder="Search Games"
                value= { searchTerm }
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input type="submit"  className="search-button" />
            </form>

        </nav>
     );
}
 
export default Navbar;