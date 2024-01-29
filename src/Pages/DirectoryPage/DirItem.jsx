




const DirItem = ({ element }) => {


    return (
        <div className="dir-item-container">
            <img src={element.pic} alt="" />
            <span>{element.answer}</span>
        </div>
    )
}

export default DirItem