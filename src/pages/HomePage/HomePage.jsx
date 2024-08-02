import './HomePage.css'
import NavBar from "../../components/NavBar/NavBar";
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo-HomePage.jfif';


export default function HomePage(){
    return (
        <div className="homePage-Content">
            <div className="logo-HomePage">
                <img src={logo} alt="Logo" />
            </div>
            <from className='form-HomePage'>
                <div className='form-group-HomePage1'>
                    <h1>LangLearner</h1>
                    <h2 className='end-Text'>Study with us</h2>
                </div>
                <div className='form-group-HomePage'>
                    <div className='group1'>
                        <h2>Choose your style of studying:</h2>
                        <Link className='buttonLink' to='/lessons'>Lessons</Link>
                        <Link className='buttonLink' to='/quizzes'>Quizzes</Link>
                        <Link className='buttonLink' to='/contact'>Contact</Link>
                    </div>
                    <div className='group2'>
                        <h2>For now you can study only 2 languages. More comming soon!</h2>
                        <Link className='buttonLink'>Romanian</Link>
                        <Link className='buttonLink'>English</Link>
                    </div>
                </div>
            </from>
        </div>
    )
}