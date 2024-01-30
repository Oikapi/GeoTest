import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import "./cardItem.css"

export default function CardItem({ question }) {
    const flashcard = question
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')

    const frontEl = useRef()
    const backEl = useRef()

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }

    useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])

    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            style={{
                minWidth: "250px",
                minHeight: "250px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "40px"
            }}
            onClick={() => setFlip(!flip)}
        >
            <div className="front" ref={frontEl}>
                <img src={flashcard.pic} alt="" />
            </div>
            <div className="back" ref={backEl}>{flashcard.answer}</div>
        </div >
    )
}