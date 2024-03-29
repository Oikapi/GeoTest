
import "./dirItem.css"



const DirItem = ({ element }) => {


    return (
        <div className="dir-item-container">
            <div className="dir-item-img"><img src={element.pic} alt="" /></div>
            <div className="dir-item-text"><span>{element.answer}</span></div>
        </div>
    )
}

export default DirItem