import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/topics">Topics</Link>
            <Link to="/order">Order</Link>
            <Link to="/sales">Sales</Link>
            <Link to="/gallery">Gallery</Link>
        </nav>
        </>
    )
}

export default Navigation;