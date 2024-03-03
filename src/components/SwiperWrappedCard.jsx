import { useState, useRef, useEffect } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import CardItem from '../Pages/CardsPage/CardItem';

const to = (i) => ({ x: 0, y: i });
const from = (_i) => ({ x: 0, rot: 0, scale: 0, y: -2000 });

const trans = (r, s) => `rotateZ(${r * 20}deg)`;

function Deck() {
    const cards = useSelector(state => state.questions);
    const [gone, setGone] = useState(() => new Set());
    const [props, api] = useSprings(cards.length, i => ({
        ...to(i),
        from: from(i),
    }));

    const containerRef = useRef(null);

    useEffect(() => {
        const containerRect = containerRef.current.getBoundingClientRect();
        const handleResize = () => {
            const newContainerRect = containerRef.current.getBoundingClientRect();
            if (newContainerRect.width !== containerRect.width || newContainerRect.height !== containerRect.height) {
                setGone(prev => new Set([...prev, ...Array.from(prev).filter(index => {
                    const cardRect = containerRef.current.querySelector(`.card-${index}`).getBoundingClientRect();
                    return cardRect.right < 10 || cardRect.left > newContainerRect.width || cardRect.bottom < 20 || cardRect.top > newContainerRect.height;
                })]));
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
        const trigger = vx > 0.05;
        if (!active && trigger) setGone(prev => new Set([...prev, index]));
        api.start(i => {
            if (index !== i) return;
            const isGone = gone.has(index);
            let x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;
            let rot = x !== 0 ? mx / 100 + (isGone ? xDir * 11 * vx : 0) : 0;
            if (isGone) {
                x = xDir * window.innerWidth * 3; // Увеличиваем перемещение по оси X, чтобы карта пролетала
                rot = xDir * 11; // Увеличиваем угол поворота, чтобы карта вращалась при пролете
            }
            return {
                x,
                rot,
                delay: undefined,
                config: { friction: 10, tension: active ? 1000 : isGone ? 200 : 500 },
            };
        });
        if (!active && gone.size === cards.length) {
            setTimeout(() => {
                gone.clear();
                api.start(i => to(i));
            }, 600);
        }
    });

    return (
        <div ref={containerRef} className={styles.container}>
            {props.map(({ x, rot }, i) => (
                <animated.div key={i} className={`card-${i} ${styles.card} `} style={{ x }}>
                    <animated.div {...bind(i)} style={{ transform: interpolate([rot, 1], trans), }}>
                        {gone.has(i) ? null : <CardItem question={cards[i]} />
                        }
                    </animated.div>
                </animated.div>
            ))}
        </div>
    );
}

export default function SwiperWrappedCard() {
    return (
        <div className="flex fill center">
            <Deck />
        </div>
    );
}
