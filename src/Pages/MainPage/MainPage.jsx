import "./mainPage.css"
import { useNavigate, } from 'react-router';

const MainPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='start-component'>
                <div className='logo-container'>
                    <img src='logo_png.png'></img>
                </div>
                <button className="start-button" onClick={() => navigate("/test")}>
                    НАЧАТЬ ТЕСТ
                </button>
                <button className="start-button" onClick={() => navigate("/directory")}>
                    СПРАВОЧНИК
                </button>
                <button className="start-button" onClick={() => navigate("/cards")}>
                    КАРТОЧКИ
                </button>
                <div className='sign'>
                    <p>Преподаватель:<br />
                        Петрова Людмила Генадьевна<br />
                        Студенты:<br />
                        Березовский Егор Дмитриевич<br />
                        Батов Илья Ильич<br />
                        Васильев Даниил Евгеньевич<br />
                    </p>
                </div>
            </div>

        </>
    )
}


export default MainPage