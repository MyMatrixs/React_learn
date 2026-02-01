import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function MyLearn(props) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // 只在浏览器执行
  }, []);

  return (
    <div>
      <p>Learn React</p>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      {props.children}

      {mounted &&
        createPortal(
          <div>这是一个传送门的内容</div>,
          document.body
        )}
    </div>
  );
}