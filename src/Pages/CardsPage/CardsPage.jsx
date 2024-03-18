import { useDispatch, useSelector } from "react-redux"
import CardItem from "../../components/CardItem"
import "./cardsPage.css"
import { increaseAlDone } from "../../store/questionsSlice"
import { useNavigate } from "react-router"
import { useState } from "react"


const CardsPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isFlipped, setIsFlipped] = useState(false)
    const questions = useSelector(state => state.questions)
    const alreadyDone = useSelector(state => state.alreadyDone)
    const buttonClickHandler = () => {
        setIsFlipped(false)
        dispatch(increaseAlDone())
    }
    return (
        <>
            <div className='header'>
                <div className='naming'>Карточки знаков</div>
                <button type="button" className="btn-close" onClick={() => navigate("/")}>
                    <img src="./outline.svg" alt="" />
                    <span className="visually-hidden">Close</span>
                </button>
            </div>
            <div className="card-container">
                <CardItem question={questions[alreadyDone]} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
                <button className="next-button absolute-button" onClick={buttonClickHandler}>СЛЕДУЮЩИЙ</button>
            </div>
        </>
    )
}

export default CardsPage