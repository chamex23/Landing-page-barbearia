import logo from '../../assets/Logo.png';
import './style.css'

export default function Header(){
  
  return(
    <div className="header" id='header'>
      <img 
        src={logo} 
        alt="Logo do site"
       />

      <div className="links-header">
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#service">Serviços</a>
        <a href="#contato">Contato</a>      
        
      </div>

      <button className="bnt-header">
         Agendar horário
      </button>
       

    </div>
  )
}
