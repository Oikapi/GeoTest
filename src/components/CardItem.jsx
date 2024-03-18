import React, { useState, useRef, useEffect } from 'react'
import styles from "./cardItem.module.css"

export default function CardItem({ question, isFlipped, setIsFlipped }) {
    const flashcard = question
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
            className={`${styles.card} ${isFlipped ? styles.flip : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={styles.front} ref={frontEl}>
                <img src={flashcard.pic} alt="" />
            </div>
            <div className={styles.back} ref={backEl}>
                {flashcard.answer}
            </div>
        </div>
    )
}