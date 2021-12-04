import './header.styles.scss';
import {Link} from 'react-router-dom';

export const Header =() =>(
    <div className="header">
         <Link className="logo-container" to="/" >
            <span className="logo">BREWERY</span>
        </Link>

    <div className="header-sections">
        <Link to="/" className="header-section">Home</Link>
        <Link to="/" className="header-section">Brewery List</Link>
    </div>
</div>

);