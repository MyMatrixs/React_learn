function PicSanguosha({number}){
    const imgurl = `/image/sanguosha/${number.toString().padStart(2,'0')}.jpg`;
    return(
      <img
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
            <h1>三国杀表情包自取</h1>
            {images}
        </section>
    )
  }