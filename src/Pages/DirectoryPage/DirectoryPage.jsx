import { useSelector } from "react-redux"
import DirItem from "./DirItem"
import "./directoryPage.css"




const DirectoryPage = () => {
    const directory = useSelector(state => state.questions)
    return (
        <div className="dir-container">
            {directory.map((el) => <DirItem element={el} />)}
        </div>
    )
}


export default DirectoryPage