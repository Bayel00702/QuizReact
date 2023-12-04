import React from 'react';

const Game = ({question, clickVar, step, questions}) => {

    const progress = Math.round((step / questions.length * 100))

    console.log(progress)
    return (
        <div className='game'>

            <div className="game__progress">
                <div style={{width: `${progress}%`}} className="game__progress-lenght"></div>
            </div>


            <div className="game__test">

                <h2 className="game__title">{question.title}</h2>

                <ul className="game__list">
                    {
                        question.variants.map((item, idx) => (
                            <li
                                key={item}
                                className="game__item"
                                onClick={() => clickVar(idx)}
                            >
                                {item}
                            </li>
                        ))
                    }
                </ul>

                <button className="game__btn">Continue</button>
            </div>
        </div>
    );
};

export default Game;