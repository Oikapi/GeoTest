import 'bootstrap/dist/css/bootstrap.min.css';
import "./eachPage.css"
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

const EachPage = () => {
    const navigate = useNavigate()
    const question = useSelector(state => state.questions)
    const alreadyDone = useSelector(state => state.alreadyDone)
    console.log(question)
    return (
        <div className='start-component'>
            <div>
                <button className="start-button" onClick={() => navigate("/test")}>
                    НАЧАТЬ ТЕСТ
                </button>
                <button className="start-button" onClick={() => navigate("/directory")}>
                    СПРАВОЧНИК
                </button>
            </div>
        </div>
    )
}


export default EachPage