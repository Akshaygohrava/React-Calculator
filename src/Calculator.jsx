import React, { useState } from 'react';
import './App.css'; 

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const clearInput = () => {
        setInput('');
    };

    const calculateResult = () => {
        try {
            setInput(eval(input));
        } catch {
            setInput('Error');
        }
    };

    return (
        <div className="calculator">
            <div className="display">{input || '0'}</div>
            <div className="buttons">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((item) => (
                    <button
                        key={item}
                        className="button"
                        onClick={() =>
                            item === 'C'
                                ? clearInput()
                                : item === '='
                                ? calculateResult()
                                : handleClick(item)
                        }
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
