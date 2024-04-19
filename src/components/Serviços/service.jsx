import './style.css'
import imageServico1 from '../../assets/Servico1.png'
import imageServico2 from '../../assets/Servico2.png'
import imageServico3 from '../../assets/Servico3.png'

export default function Service(){
  return(
    <div className="container-servicos" id='service'>
       
       <h1>SERVIÇOS</h1>

      <div className="modelos-service">

        <div className="imageContent">
            <img src={imageServico1} alt="" />
            <div className="info">
              <div className="text-service">
                Corte de cabelo
             </div>
              <div className="price">
                R$ 18,00
              </div>
            </div>
        </div>

        <div className="imageContent">
            <img src={imageServico2} alt="" />
            <div className="info">
              <div className="text-service">
                Corte de cabelo
              </div>
            <div className="price">
              R$ 18,00
            </div>
            </div>
        </div>

        <div className="imageContent">
           <img src={imageServico3} alt="" />
            <div className="info">
              <div className="text-service">
                Corte de cabelo
              </div> 
              <div className="price">
                R$ 18,00
              </div>
            </div>
        </div>

    

      </div>
    </div>
  )
}