import { useDispatch, useSelector } from "react-redux"
import CardItem from "./CardItem"
import "./cardsPage.css"
import { increaseAlDone } from "../../store/questionsSlice"
import { useNavigate } from "react-router"


const CardsPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions)
    const alreadyDone = useSelector(state => state.alreadyDone)
    return (
        <>
            <div className='header'>
                <div className='naming'>ТЕСТ</div>
                <button type="button" className="btn-close" onClick={() => navigate("/")}>
                    <img src="./outline.svg" alt="" />
                    <span className="visually-hidden">Close</span>
                </button>
            </div>
            <div className="card-container">
                <CardItem question={questions[alreadyDone]} />
                <button className="next-button" onClick={() => dispatch(increaseAlDone())}>СЛЕДУЮЩИЙ</button>
            </div>
        </>
    )
}

export default CardsPage