import React from 'react';
import Logo from '../../assets/pngtree-birthday-cap-with-confetti-and-serpentine-explosion-celebration-png-image_3923604.jpg'

const Result = ({correct, questions}) => {
    return (
        <div className='result'>
            <img src={Logo} alt="" className="result__img"/>


            {
                correct >= 0 && correct === 2 ?
                    <h2 className="result__title">Не плохо</h2>
                    : correct >= 2 && correct === 5 ?
                        <h2 className="result__title">Так держать</h2>
                    : correct > 5 ?
                            <h2 className="result__title">Вы молодец</h2>
                        : ''

            }
            <p className="result__text">Вы отгадали {correct} ответа из {questions.length}</p>
        </div>
    );
};

export default Result;