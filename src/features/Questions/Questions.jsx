import { useState } from "react";
import LessonsQuestion from "./LessonsQuestion";
import './Questions.css'
import { freqQuestions } from "../../db/data";
export default function Questions() {
    const data = freqQuestions;
    const [indexActive, setIndexActive] = useState(null);
    return (
        <>
        <h1>Questions</h1>
        <div className='Questions'>
                    {data.map((question,index) => (
                        <LessonsQuestion key={index} index={index} question={question} indexActive = {indexActive} setIndexActive={setIndexActive}/>
                    ))}
                </div>
        </>
    )
}