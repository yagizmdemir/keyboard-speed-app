import React from 'react'
import { useSelector } from 'react-redux';
import { type } from '../redux/slice/type.slice';
import Word from './Word';

const Words = () => {
    const data = useSelector(type);

    return (
        <div className='words-inside--area'>
            {
                data.map((item, index) => (
                    <Word detail={item} key={`word--${index}`} />
                ))
            }
        </div>
    )
}

export default Words