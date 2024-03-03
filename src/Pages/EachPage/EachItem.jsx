import 'bootstrap/dist/css/bootstrap.min.css';
import "./eachItem.css"
import { useSelector, useDispatch } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';
import { useCallback, useState } from 'react';
import { increaseAlDone, setCompleted } from '../../store/questionsSlice';
import { useNavigate } from 'react-router';
import { AnswerButtons } from '../../components/AnswerButtons';
const EachItem = () => {
    // const [doneNum, increase] = useState(0);
    const navigate = useNavigate()
    const [glow, setGlow] = useState("none")
    const question = useSelector(state => state.questions)
    const alreadyDone = useSelector(state => state.alreadyDone)
    const dispatch = useDispatch()

    const handleCheckAnswer = useCallback((ans, aldo) => {
        console.log(`Готово из ич${aldo}`)
        console.log(ans)
        console.log(question[aldo].answer)
        if (ans === question[aldo].answer) {
            setGlow("green")
            setTimeout(() => {
                // increase(prev => prev + 1)
                // dispatch(setCompleted({ pic: question[alreadyDone].pic }))
                dispatch(increaseAlDone())
                setGlow("none")
            }, 1000)

        }
        else {
            setGlow("red")
            setTimeout(() => {
                setGlow("none")
            }, 1000)
            console.log("неправильно")
        }
    }, [])
    return (
        <>
            <div className='header'>
                <div className='naming'>ТЕСТ</div>
                <button type="button" className="btn-close" onClick={() => navigate("/")}>
                    <img src="./outline.svg" alt="" />
                    <span className="visually-hidden">Close</span>
                </button>
            </div>
            <div className='main-area'>
                <div className='question'>
                    <div className={glow === "none" ? "photo-area" : glow === "green" ? "photo-area glow-green" : "photo-area glow-red"}>
                        <img src={`${question[alreadyDone].pic}`} alt="" />
                    </div>
                </div>
                <AnswerButtons clickHandler={handleCheckAnswer} id={alreadyDone} allQuestions={question} />
            </div >
            <div className='process-bar-container'>
                <div className='process-bar'>
                    <ProgressBar variant="success" now={alreadyDone / question.length * 100} /><p>{question.length}</p><img src="check-circle-fill.svg" alt="" />
                </div>
            </div>
            {/* <div className='answer'>
                <input type="text" value={nowInInput} onChange={(e) => changeInput(e.target.value)} />
            </div> */}
            {/* <div className='footer'>
                <div className='process-bar'><ProgressBar variant="success" now={al / 60 * 100} /><p>{al}</p><img src="check-circle-fill.svg" alt="" /></div>
                <button className='next-button' onClick={() => {
                    dispatch(increaseAlDone())
                    changeInput("")
                }}>ПРОПУСТИТЬ</button>
                <button className="next-button" onClick={handleCheckAnswer}>
                    ПРОВЕРИТЬ ОТВЕТ
                </button>

            </div> */}
        </>
    )
}


export default EachItem