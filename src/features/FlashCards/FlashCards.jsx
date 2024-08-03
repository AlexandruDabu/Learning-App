import FlashCard from "../../components/common/FlashCard";
import { dataFlashCards } from "../../db/data";

export default function FlashCards() {
    return (
        <>
        <h1>FlashCards</h1>
        <div className="lessonsContent">
            {dataFlashCards.map((item) => (
                <FlashCard question = {item.question} answer = {item.answer}/>
            ))}
        </div>
        </>
    )
}