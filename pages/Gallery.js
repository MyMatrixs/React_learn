const apiUrl = process.env.NEXT_PUBLIC_API_URL;
import React, { useState } from 'react';
import styles from '../styles/Mystyle.module.css'; // 引入CSS样式文件

function PicSanguosha({number}){
    const imgurl = `${apiUrl}/image/sanguosha/${number.toString().padStart(2,'0')}.jpg`;
    const [isJumping, setIsJumping] = useState(false);

    const handleClick = () => {
      setIsJumping(true);
      // 设置定时器以在动画完成后重置状态
      setTimeout(() => setIsJumping(false), 300); // 假设动画时长为500毫秒
    };

    return(
        <img
          className={`${styles.pic} ${isJumping ? styles.jump : ''}`}
          onClick={handleClick}
          src={imgurl}
          alt={`Sanguosha ${number}`}
        ></img>

    )
  }

  export default function Gallery(){
    const images = [];
    for(let i=1;i<=49;i++){
      images.push(<PicSanguosha key = {i} number={i}/>)
    }
    return(
        <section>
            <h1>表情包自取</h1>
            {images}
        </section>
    )
  }