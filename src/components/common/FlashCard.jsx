import React, { useState } from 'react';
import './FlashCard.css';

export default function FlashCard({ question, answer }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div 
            className={`flashcard ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped(!flipped)}
        >
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    <p>{question}</p>
                </div>
                <div className="flashcard-back">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
}
