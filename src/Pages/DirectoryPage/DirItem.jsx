
import "./dirItem.css"



const DirItem = ({ element }) => {


    return (
        <div className="dir-item-container">
            <div className="dir-item-img"><img src={element.pic} alt="" /></div>
            <div className="dir-item-text">{element.answer}</div>
        </div>
    )
}

export default DirItem