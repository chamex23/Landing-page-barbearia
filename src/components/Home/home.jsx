import './style.css'
import bgFundo from '../../assets/bg-home3.jpg'

export default function Home(){
  return(
    <div className="container" id='home'>

      <span></span>
      <img src={bgFundo} alt="" />
    
        <h1>ESTILO É UM REFLEXO DA SUA ATITUDE <br/> E PERSONALIDADE</h1>
        <p>Horário de funcionamento das 08:00 às 19 horas</p>

        <button className="bnt-home">
          Agendar horário
        </button>
    </div>
 
  )
}