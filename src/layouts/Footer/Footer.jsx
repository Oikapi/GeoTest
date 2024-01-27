import { ProgressBar } from "react-bootstrap"
import { increaseAlDone } from "../../store/questionsSlice"
import { useDispatch, useSelector } from "react-redux"


const Footer = () => {
    const al = useSelector(state => state.alreadyDone)
    const dispatch = useDispatch()
    return (
        <div className='footer'>
            <div className='process-bar'><ProgressBar variant="success" now={al / 60 * 100} /><p>{`${al} / 60`}</p></div>



            <button className="next-button">
                ПРОВЕРИТЬ ОТВЕТ
            </button>
            <button className='next-button' onClick={() => {
                dispatch(increaseAlDone())
                console.log(al)
            }}>ПРОПУСТИТЬ ВОПРОС</button>
        </div>
    )
}

export default Footer