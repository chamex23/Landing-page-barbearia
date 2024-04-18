import './style.css'
import image1 from '../../assets/Sobre1.png'
import image2 from '../../assets/Sobre2.png'
import image3 from '../../assets/Sobre3.png'

export default function Sobre(){
  return(
    <div className="container-sobre" id='sobre'>

      <div className="images">
       <img src={image1} alt="" />
       <img src={image2} alt="" />
       <img src={image3} alt="" />
       
      </div>

      
      <div className="text-sobre">
        <h1>Sobre</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis pariatur blanditiis corporis quos asperiores mollitia, quia deserunt delectus optio, illo ut dolorum eaque velit eveniet? Laboriosam quod, delectus vitae assumenda quibusdam unde exercitationem tempora fuga iste illum ex? Ducimus, error nihil dolores dolor debitis, deserunt quod architecto, a impedit quaerat itaque soluta consequatur hic facilis reprehenderit animi id doloremque. Praesentium sunt recusandae dolor architecto sapiente cum maxime obcaecati enim eligendi doloribus, alias quos quisquam odio consequatur nobis nihil. Sed, vitae? Dolore hic fugiat, voluptate praesentium, dolor veritatis unde beatae perspiciatis, similique tempora iste illo libero ipsum assumenda. sunt recusandae dolor architecto sapiente cum maxime obcaecati enim eligendi doloribus, alias quos quisquam odio consequatur nobis nihil. Sed, vitae? Dolore hic fugiat, voluptate praesentium, dolor veritatis unde beatae perspiciatis, similique tempora iste illo libero ipsum assumenda.sunt recusandae dolor architecto sapiente cum maxime obcaecati enim eligendi doloribus, alias quos quisquam odio consequatur nobis nihil. Sed, vitae? Dolore hic fugiat, voluptate praesentium, dolor veritatis unde beatae perspiciatis, similique tempora iste illo libero ipsum assumenda.sunt recusandae dolor architecto sapiente cum maxime obcaecati enim eligendi doloribus, alias quos quisquam odio consequatur nobis nihil. Sed, vitae? Dolore hic fugiat, voluptate praesentium, dolor veritatis unde beatae perspiciatis, similique tempora iste illo libero ipsum assumenda.</p>
      </div>

    </div>
  )
}