import 'bootstrap/dist/css/bootstrap.min.css';
import "./testPage.css"
import { useSelector, useDispatch } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';
import { useCallback, useEffect, useState } from 'react';
import { setCompleted } from '../../store/questionsSlice';
import { useNavigate } from 'react-router';
import { AnswerButtons } from '../../components/AnswerButtons';

const TestPage = () => {
    const navigate = useNavigate()
    const [glow, setGlow] = useState("none")
    const question = useSelector(state => state.questions)
    const totalCompleted = useSelector(state => state.totalCompleted)
    const dispatch = useDispatch()
    const [currQuestion, setCurrQestion] = useState({ pic: "null" });

    const findNew = () => {
        let randomNumber = 0;
        do {
            randomNumber = Math.floor(Math.random() * (question.length - 0 + 1)) + 0;
        } while (question[randomNumber].completed == true);
        setCurrQestion(question[randomNumber]);
    }

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * (question.length - 0 + 1)) + 0;
        setCurrQestion(question[randomNumber]);
    }, [question])


    const handleCheckAnswer = useCallback((ans, currqes) => {
        if (ans === currqes.answer) {
            setGlow("green")
            setTimeout(() => {
                dispatch(setCompleted(currqes));
                findNew()
                setGlow("none")
            }, 1000)

        }
        else {
            setGlow("red")
            setTimeout(() => {
                setGlow("none")
            }, 1000)
        }
    }, [])
    return (
        <>
            <div className='header'>
                <div className='naming'>Тест</div>
                <button type="button" className="btn-close" onClick={() => navigate("/")}>
                    <img src="./outline.svg" alt="" />
                    <span className="visually-hidden">Close</span>
                </button>
            </div>
            <div className='main-area'>
                <div className='question'>
                    <div className={glow === "none" ? "photo-area" : glow === "green" ? "photo-area glow-green" : "photo-area glow-red"} style={{ maxWidth: "100%" }}>
                        <img src={`${currQuestion.pic}`} alt="" />
                    </div>
                </div>
                <AnswerButtons clickHandler={handleCheckAnswer} currQuestion={currQuestion} allQuestions={question} />
            </div >
            <div className='process-bar-container'>
                <div className='process-bar'>
                    <ProgressBar variant="success" now={totalCompleted / question.length * 100} /><p>{totalCompleted}</p><img src="check-circle-fill.svg" alt="" />
                </div>
            </div>
        </>
    )
}


export default TestPage