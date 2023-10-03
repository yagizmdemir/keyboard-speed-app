import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { restartWords } from '../redux/slice/type.slice';

const Result = () => {
    const dispatch = useDispatch();
    const { corrects, incorrects, totalHit } = useSelector((state) => state.type);

    const handleRestart = () => {
        dispatch(restartWords());
    }

    return (
        <div className='result-pop'>
            <div className='result-card'>
                <h4>Sonuç</h4>
                <div className='result-body'>
                    <div className='result-item'>
                        <p>Total Hit</p>
                        <p>{totalHit}</p>
                    </div>
                    <div className='result-item'>
                        <p>Correct Words</p>
                        <p>{corrects}</p>
                    </div>
                    <div className='result-item'>
                        <p>Incorrect Words</p>
                        <p>{incorrects}</p>
                    </div>
                </div>
                <button className='restart-btn' onClick={handleRestart}>Restart</button>
            </div>
        </div>
    )
}

export default Result