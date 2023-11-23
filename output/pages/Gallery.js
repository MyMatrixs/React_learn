function ProFile(){
    return(
      <img
        src='https://i.imgur.com/QIrZWGIs.jpg'
        alt='Abc'
      ></img>
    )
  }

  export default function Gallery(){
    return(
        <section>
            <ProFile></ProFile>
            <ProFile></ProFile>
            <ProFile></ProFile>
        </section>
    )
  }