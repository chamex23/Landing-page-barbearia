import './style.css'

import unidade1 from '../../assets/Unidade1.png'
import unidade2 from '../../assets/Unidade2.png'
import unidade3 from '../../assets/Sobre2.png'
import Logo from '../../assets/Logo.png'


export default function Unidade(){
  return(
    <div className="container-unidade">

      <h1>NOSSA UNIDADE</h1>
        
      <input style={{position: 'relative',top: 40, right: 20, width:30 }} 
     
      type="radio" id='1' class="slide-controller" name="slide"/>
      <input style={{position: 'relative',top: 26.5, right: 4}} type="radio" id='2' class="slide-controller" name="slide" />
        <input style={{position: 'relative',top: 13.5, right:-11 }} type="radio" id='3' class="slide-controller" name="slide" />

                    
      <div class="slide-show" >          

        <ul class="slides-list" >
          <li class="slide" >
            <img
            src={unidade1} 
            width={350}
            />
          </li>
          <li class="slide" >
            <img
            src={unidade2}
            width={350}
            />
            
          </li>
          <li class="slide" >
            <img
            src={unidade3}
            width={350}
            />
            
          </li>
      
        </ul>
      </div>


    </div>
  )
}