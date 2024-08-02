import { Link } from 'react-router-dom'
import './NavBar.css'
import { useEffect, useState } from 'react';
export default function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function demoLogin() {
        localStorage.setItem('username', 'Alexandru Felix Dabuleanu');
        localStorage.setItem('password', 'Pa$$w0rd');
        setIsLoggedIn(true);
        window.location.reload();
    }

    function demoLogout() {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        setIsLoggedIn(false);
        window.location.reload();
    }

    useEffect(() => {
        const userIsLoggedIn = localStorage.getItem('username') && localStorage.getItem('password');
        setIsLoggedIn(!!userIsLoggedIn);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to='/'>LangLearner</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to='/lessons'>Lessons</Link>
                </li>
                <li>
                    <Link to='/quizzes'>Quizzes</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
                <li>
                    {isLoggedIn ? 
                    (<button className='navbar-login' onClick={demoLogout}>Logout</button>) : 
                    (<button className='navbar-login' onClick={demoLogin}>Login</button>)}
                </li>
            </ul>
        </nav>
    )
}