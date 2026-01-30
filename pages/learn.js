import React, {useState, useMemo} from "react";
import { createPortal } from 'react-dom';

export default function MyLearn(props) {
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>Learn React</p>
            <p>Count: {count}</p>
            <button onClick={(event) => {
                console.log(event);
                event.preventDefault();
                setCount(count + 1);
            }}>Increment</button>
            <button onClick={() => {
                setCount(count - 1);
            }}>Decrement</button>
            {props.children}
            {createPortal(
                <div>这是一个传送门的内容</div>,
                document.body
            )}

            {useMemo(() => {
                console.log('Count changed:', count);
            }, [count])}
        </div>
    )
}

MyLearn.Ch = function MyLearnCh(props) {
    return (
        <div>{props.children}</div>
    )
}