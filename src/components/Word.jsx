import React from 'react'

const Word = ({ detail }) => {
    const { word, status } = detail;
    return (
        <div className={`${status === 'correct' ? 'correct' : (status === 'incorrect' ? 'incorrect' : (status === 'active' ? 'active' : ''))}`}>
            {word}
        </div>
    )
}

export default React.memo(Word)