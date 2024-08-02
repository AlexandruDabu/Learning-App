import React from 'react';

export default function Question({ question, value, onChange }) {
    return (
        <div className="form-group-Quiz">
            <h2>{question}</h2>
            <input
                type="text"
                placeholder="Answer"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
