import React, { memo, useEffect, useMemo } from 'react'
import "./answerButton.css"
import { useSelector } from 'react-redux'

export const AnswerButtons = memo(({ clickHandler, currQuestion }) => {
    const allQuestions = useSelector(state => state.questions)
    let answArr = []
    function whereRihtToGo() {
        let randomNumber;
        randomNumber = Math.floor(Math.random() * 4);
        return randomNumber;
    }

    function getRandomNumber() {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * allQuestions.length); // Генерируем случайное число от 0 до 100
        } while (allQuestions[randomNumber].answer === currQuestion.answer); // Повторяем генерацию, пока число равно 45
        return randomNumber;
    }

    const righId = whereRihtToGo()
    for (let i = 0; i < 4; i++) {
        if (i == righId) {
            answArr[i] = currQuestion.answer;
        }
        else {
            answArr[i] = allQuestions[getRandomNumber()].answer;
        }
    }
    return (
        <div className='answer-buttons'>
            <div className='answer-button'>
                <button onClick={() => clickHandler(answArr[0], currQuestion)}>
                    {answArr[0]}
                </button>
            </div>
            <div className='answer-button'>
                <button onClick={() => clickHandler(answArr[1], currQuestion)}>
                    {answArr[1]}
                </button>
            </div>
            <div className='answer-button'>
                <button onClick={() => clickHandler(answArr[2], currQuestion)}>
                    {answArr[2]}
                </button>
            </div>
            <div className='answer-button'>
                <button onClick={() => clickHandler(answArr[3], currQuestion)}>
                    {answArr[3]}
                </button>
            </div>
        </div>
    )
})
