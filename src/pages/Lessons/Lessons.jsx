import { Link, Outlet } from "react-router-dom";
import FlashCard from "../../components/common/FlashCard";
import './Lessons.css'
export default function Lessons() {
    
    return (
        <>
            <h1>Choose the way you want to study</h1>
            <nav class="button-nav">
                <ul class="button-list">
                    <li class="button-item"><Link to='/lessons/flashcards' class="button-link">FlashCards</Link></li>
                    <li class="button-item"><Link to='/lessons/courses' class="button-link">Courses</Link></li>
                    <li class="button-item"><Link to='/lessons/questions' class="button-link">Questions</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}