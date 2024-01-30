import 'bootstrap/dist/css/bootstrap.min.css';
import "./eachItem.css"
import { useSelector, useDispatch } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';
import { useState } from 'react';
import { increaseAlDone, setCompleted } from '../../store/questionsSlice';
import { useNavigate } from 'react-router';
const EachItem = () => {
    const navigate = useNavigate()
    const [nowInInput, changeInput] = useState("")
    const [glow, setGlow] = useState("none")
    const question = useSelector(state => state.questions)
    const alreadyDone = useSelector(state => state.alreadyDone)
    const al = question.filter((el) => el.completed === true).length
    console.log(al)
    const dispatch = useDispatch()
    const handleCheckAnswer = () => {
        if (nowInInput.toLocaleLowerCase() === question[alreadyDone].answer.toLocaleLowerCase()) {
            setGlow("green")
            setTimeout(() => {
                dispatch(setCompleted({ pic: question[alreadyDone].pic }))
                dispatch(increaseAlDone())
                changeInput("")
            }, 1000)

            console.log
        } else {
            setGlow("red")
            setTimeout(() => {
                setGlow("none")
            }, 1000)
            console.log("неправильно")
        }
    }
    console.log(question)
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
                    <p>Напишите определение для данного знака</p>
                    <div className={glow === "none" ? "photo-area" : glow === "green" ? "photo-area glow-green" : "photo-area glow-red"}>
                        <img src={`${question[alreadyDone].pic}`} alt="" />
                    </div>

                </div>
                <div className='answer'>
                    <input type="text" value={nowInInput} onChange={(e) => changeInput(e.target.value)} />
                </div>
            </div >
            <div className='footer'>
                <div className='process-bar'><ProgressBar variant="success" now={al / 60 * 100} /><p>{al}</p><img src="check-circle-fill.svg" alt="" /></div>


                <button className='next-button' onClick={() => {
                    dispatch(increaseAlDone())
                    changeInput("")
                }}>ПРОПУСТИТЬ</button>
                <button className="next-button" onClick={handleCheckAnswer}>
                    ПРОВЕРИТЬ ОТВЕТ
                </button>

            </div>
        </>
    )
}


export default EachItem