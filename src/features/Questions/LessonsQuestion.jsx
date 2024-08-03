export default function LessonsQuestion({index, question, indexActive, setIndexActive}) {
    const togglePanel = () =>{
        if (index === indexActive) {
            setIndexActive(null);
        } else {
            setIndexActive(index); 
        }
    }
    const isCurrentActive = index === indexActive;
    return (
        <div className="eachQuestion">
        <button className={`Question ${isCurrentActive ? 'active' : ''}`} style={{borderRadius: isCurrentActive ? '16px 16px 0 0' : '16px'}}  onClick={togglePanel}>
        {question.question}<i class="fa-solid fa-chevron-down"></i>
        </button>
        <div className='panel' style={{display: isCurrentActive ? 'block' : 'none'}}>
            <p>
                {question.answer}
            </p>
        </div>
        </div>
    )
}