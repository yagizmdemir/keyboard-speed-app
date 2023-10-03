import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { finish, handleChange, next, restartWords, start, timeDecrement } from '../redux/slice/type.slice'

let intervalId;

const Input = () => {
    const dispatch = useDispatch();
    const { counter, isStart, finished } = useSelector((state) => state.type);
    const [value, setValue] = useState('');

    useEffect(() => {

        if (isStart && !finished && counter === 60) {
            intervalId = setInterval(() => {
                dispatch(timeDecrement());
            }, 1000);
        }

        if (!isStart || counter <= 0) {
            clearInterval(intervalId);
        }

        if (counter <= 0) {
            dispatch(finish())
        }

    }, [counter, dispatch, finished, isStart]);

    const handleRestart = () => {
        clearInterval(intervalId);
        dispatch(restartWords());
    }

    const handleInputChange = (e) => {

        if (e.target.value.trim()) {

            dispatch(handleChange());
            if (e.target.value.includes(' ')) {
                dispatch(next({ text: e.target.value }));
                setValue('');
            } else {
                setValue(e.target.value);
            }

            if (!isStart) {
                dispatch(start());
            }

        }

    }

    return (
        <div className='input--inside'>
            <div className='counter'>
                {counter}
            </div>
            <input className='counter-input' placeholder='Start typing to get started' value={value} onChange={handleInputChange} />
            <div className='restart-btn'>
                <button onClick={handleRestart}>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default Input