import { useSelector } from "react-redux"
import DirItem from "./DirItem"
import "./directoryPage.css"
import { useNavigate } from "react-router"

const DirectoryPage = () => {
    const navigate = useNavigate()
    const directory = useSelector(state => state.questions)
    return (
        <>
            <div className='header'>
                <div className='naming'>Справочник</div>
                <button type="button" className="btn-close" onClick={() => navigate("/")}>
                    <img src="./outline.svg" alt="" />
                    <span className="visually-hidden">Close</span>
                </button>
            </div>
            <div className="main-container">
                <div className="dir-container">
                    {directory.map((el, index) => <DirItem element={el} key={index} />)}
                </div>
            </div>

        </>
    )
}


export default DirectoryPage