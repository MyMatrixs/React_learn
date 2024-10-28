const apiUrl = process.env.NEXT_PUBLIC_API_URL;
import React, { useState } from 'react';
import styles from '../styles/Mystyle.module.css'; // 引入CSS样式文件

function PicSanguosha({update,number}){
    const imgurl = `${apiUrl}/image/sanguosha/${number.toString().padStart(2,'0')}.jpg`;
    const [isJumping, setIsJumping] = useState(false);
    const playBeepSound = () => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(3000, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.1);
      oscillator.frequency.exponentialRampToValueAtTime(3000, audioContext.currentTime + 0.3);
      gainNode.gain.setValueAtTime(1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.1, audioContext.currentTime + 0.2);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    };
    const handleClick = () => {
      update(imgurl)
      setIsJumping(true);
      playBeepSound(); // 播放声音
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

  export default function Gallery({setimgurl}){
    const images = [];
    for(let i=1;i<=49;i++){
      images.push(<PicSanguosha update = {setimgurl} key = {i} number={i}/>)
    }
    return(
        <section>
            <h1>表情包自取</h1>
            {images}
        </section>
    )
  }