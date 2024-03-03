import React, { memo, useEffect, useMemo } from 'react'
import "./answerButton.css"
import { useSelector } from 'react-redux'

export const AnswerButtons = memo(({ clickHandler, id, allQuestions }) => {

    let answArr = []
    // const id = useSelector(state => state.alreadyDone)
    console.log(`Готово из анс${id}`)

    // const answArr = useState([])
    function whereRihtToGo() {
        let randomNumber;
        randomNumber = Math.floor(Math.random() * 4);
        return randomNumber;
    }
    function getRandomNumber() {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * allQuestions.length); // Генерируем случайное число от 0 до 100
        } while (randomNumber === id); // Повторяем генерацию, пока число равно 45
        return randomNumber;
    }

    const righId = whereRihtToGo()
    for (let i = 0; i < 4; i++) {
        if (i == righId) {
            answArr[i] = allQuestions[id].answer;
        }
        else {
            answArr[i] = allQuestions[getRandomNumber()].answer;
        }
    }
    console.log(answArr)
    console.log(righId)

    return (
        <div className='answer-buttons'>
            <div className='answer-button'>
                <button onClick={() => clickHandler(answArr[0], id)}>
                    {answArr[0]}
                </button>
            </div>
            <div className='answer-button'>
                <button onClick={() => clickHandler(answArr[1], id)}>
                    {answArr[1]}
                </button>
            </div>
            <div className='answer-button'>
                <button onClick={() => clickHandler(answArr[2], id)}>
                    {answArr[2]}
                </button>
            </div>
            <div className='answer-button'>
                <button onClick={() => clickHandler(answArr[3], id)}>
                    {answArr[3]}
                </button>
            </div>
        </div>
    )
})
