import './style.css'
import barbeiro1 from '../../assets/Barbeiro1.png'
import barbeiro2 from '../../assets/Barbeiro2.png'
import barbeiro3 from '../../assets/Barbeiro3.png'

export default function Contato(){
  return(
    <div className='container-contato' id='contato'>
      <h1>NOSSA EQUIPE</h1>

      <div className="barbeiros">

        <div className="content">

          <div className="inforBarber">
            <img src={barbeiro1} alt="" />
            <p>Lucas Silva</p>
          </div>
          

          <div className="info">
           
            <div className="redes-sociais">
              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.4008 7.58602C30.7829 5.96732 28.8608 4.68462 26.7451 3.81176C24.6295 2.9389 22.3621 2.49312 20.0734 2.50008C10.4688 2.50008 2.65 10.2798 2.64609 19.8438C2.64184 22.8892 3.44461 25.8814 4.97266 28.5157L2.5 37.5001L11.7383 35.0884C14.2955 36.4737 17.1581 37.1987 20.0664 37.1977H20.0734C29.6773 37.1977 37.4953 29.4173 37.5 19.854C37.5058 17.5732 37.058 15.314 36.1826 13.2078C35.3071 11.1017 34.0216 9.19071 32.4008 7.58602ZM20.0734 34.2704H20.0672C17.4745 34.2712 14.929 33.5773 12.6953 32.261L12.1664 31.9485L6.68437 33.3798L8.14766 28.0602L7.80312 27.5134C6.35343 25.2182 5.58535 22.5585 5.58828 19.8438C5.58828 11.8962 12.0891 5.42977 20.0789 5.42977C23.9117 5.42292 27.5903 6.93878 30.3055 9.64393C33.0208 12.3491 34.5504 16.022 34.5578 19.8548C34.5547 27.8032 28.057 34.2704 20.0734 34.2704ZM28.018 23.4743C27.5828 23.2571 25.4398 22.2087 25.043 22.0641C24.6461 21.9196 24.3531 21.847 24.0633 22.2813C23.7734 22.7157 22.9383 23.6876 22.6844 23.9806C22.4305 24.2735 22.1766 24.3056 21.7414 24.0884C21.3063 23.8712 19.9023 23.4141 18.2391 21.9376C16.9445 20.7884 16.0711 19.3696 15.8172 18.936C15.5633 18.5024 15.7898 18.2673 16.0078 18.0516C16.2039 17.8571 16.443 17.5454 16.6609 17.2923C16.8789 17.0391 16.9516 16.8579 17.0961 16.5688C17.2406 16.2798 17.1687 16.0266 17.0602 15.8102C16.9516 15.5938 16.0805 13.4602 15.718 12.5923C15.3641 11.747 15.0055 11.8618 14.7383 11.8485C14.4844 11.836 14.1914 11.8329 13.9031 11.8329C13.6827 11.8386 13.4659 11.8897 13.2662 11.983C13.0664 12.0763 12.888 12.2098 12.7422 12.3751C12.343 12.8095 11.218 13.8595 11.218 15.9907C11.218 18.122 12.7805 20.1845 12.9961 20.4735C13.2117 20.7626 16.0664 25.1399 20.4344 27.0173C21.2455 27.3646 22.0742 27.6692 22.9172 27.9298C23.9602 28.2595 24.9094 28.2134 25.6594 28.1016C26.4961 27.9774 28.2375 27.0532 28.5992 26.0407C28.9609 25.0282 28.9617 24.161 28.8531 23.9806C28.7445 23.8001 28.4539 23.6907 28.018 23.4743Z" fill="#6C6C6C" fill-opacity="0.776471"/>
              </svg>
              </a>

              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M30 3.33325H25C22.7899 3.33325 20.6702 4.21123 19.1074 5.77403C17.5446 7.33683 16.6667 9.45645 16.6667 11.6666V16.6666H11.6667V23.3333H16.6667V36.6666H23.3333V23.3333H28.3333L30 16.6666H23.3333V11.6666C23.3333 11.2246 23.5089 10.8006 23.8215 10.4881C24.134 10.1755 24.558 9.99992 25 9.99992H30V3.33325Z" stroke="#6C6C6C" stroke-opacity="0.776471" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>

              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M28.3333 3.33325H11.6666C7.06427 3.33325 3.33331 7.06421 3.33331 11.6666V28.3333C3.33331 32.9356 7.06427 36.6666 11.6666 36.6666H28.3333C32.9357 36.6666 36.6666 32.9356 36.6666 28.3333V11.6666C36.6666 7.06421 32.9357 3.33325 28.3333 3.33325Z" stroke="#6C6C6C" stroke-opacity="0.776471" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.6667 18.95C26.8724 20.3371 26.6355 21.7537 25.9896 22.9984C25.3438 24.243 24.3219 25.2524 23.0694 25.8828C21.8169 26.5132 20.3974 26.7327 19.013 26.5099C17.6286 26.2871 16.3496 25.6335 15.3581 24.6419C14.3665 23.6504 13.7129 22.3715 13.4901 20.987C13.2674 19.6026 13.4868 18.1832 14.1172 16.9306C14.7477 15.6781 15.757 14.6562 17.0017 14.0104C18.2463 13.3646 19.6629 13.1277 21.05 13.3333C22.4649 13.5432 23.7748 14.2025 24.7862 15.2139C25.7976 16.2253 26.4569 17.5351 26.6667 18.95Z" stroke="#6C6C6C" stroke-opacity="0.776471" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M29.1667 10.8333H29.1834" stroke="#6C6C6C" stroke-opacity="0.776471" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>

            </div>

          </div>

        </div>

      <div className="content">
          
          <div className="inforBarber">
            <img src={barbeiro2} alt="" />
            <p>Lucas Silva</p>
          </div>
          

          <div className="info">
           
            <div className="redes-sociais">
              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.4008 7.58602C30.7829 5.96732 28.8608 4.68462 26.7451 3.81176C24.6295 2.9389 22.3621 2.49312 20.0734 2.50008C10.4688 2.50008 2.65 10.2798 2.64609 19.8438C2.64184 22.8892 3.44461 25.8814 4.97266 28.5157L2.5 37.5001L11.7383 35.0884C14.2955 36.4737 17.1581 37.1987 20.0664 37.1977H20.0734C29.6773 37.1977 37.4953 29.4173 37.5 19.854C37.5058 17.5732 37.058 15.314 36.1826 13.2078C35.3071 11.1017 34.0216 9.19071 32.4008 7.58602ZM20.0734 34.2704H20.0672C17.4745 34.2712 14.929 33.5773 12.6953 32.261L12.1664 31.9485L6.68437 33.3798L8.14766 28.0602L7.80312 27.5134C6.35343 25.2182 5.58535 22.5585 5.58828 19.8438C5.58828 11.8962 12.0891 5.42977 20.0789 5.42977C23.9117 5.42292 27.5903 6.93878 30.3055 9.64393C33.0208 12.3491 34.5504 16.022 34.5578 19.8548C34.5547 27.8032 28.057 34.2704 20.0734 34.2704ZM28.018 23.4743C27.5828 23.2571 25.4398 22.2087 25.043 22.0641C24.6461 21.9196 24.3531 21.847 24.0633 22.2813C23.7734 22.7157 22.9383 23.6876 22.6844 23.9806C22.4305 24.2735 22.1766 24.3056 21.7414 24.0884C21.3063 23.8712 19.9023 23.4141 18.2391 21.9376C16.9445 20.7884 16.0711 19.3696 15.8172 18.936C15.5633 18.5024 15.7898 18.2673 16.0078 18.0516C16.2039 17.8571 16.443 17.5454 16.6609 17.2923C16.8789 17.0391 16.9516 16.8579 17.0961 16.5688C17.2406 16.2798 17.1687 16.0266 17.0602 15.8102C16.9516 15.5938 16.0805 13.4602 15.718 12.5923C15.3641 11.747 15.0055 11.8618 14.7383 11.8485C14.4844 11.836 14.1914 11.8329 13.9031 11.8329C13.6827 11.8386 13.4659 11.8897 13.2662 11.983C13.0664 12.0763 12.888 12.2098 12.7422 12.3751C12.343 12.8095 11.218 13.8595 11.218 15.9907C11.218 18.122 12.7805 20.1845 12.9961 20.4735C13.2117 20.7626 16.0664 25.1399 20.4344 27.0173C21.2455 27.3646 22.0742 27.6692 22.9172 27.9298C23.9602 28.2595 24.9094 28.2134 25.6594 28.1016C26.4961 27.9774 28.2375 27.0532 28.5992 26.0407C28.9609 25.0282 28.9617 24.161 28.8531 23.9806C28.7445 23.8001 28.4539 23.6907 28.018 23.4743Z" fill="#6C6C6C" fill-opacity="0.776471"/>
              </svg>
              </a>

              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M30 3.33325H25C22.7899 3.33325 20.6702 4.21123 19.1074 5.77403C17.5446 7.33683 16.6667 9.45645 16.6667 11.6666V16.6666H11.6667V23.3333H16.6667V36.6666H23.3333V23.3333H28.3333L30 16.6666H23.3333V11.6666C23.3333 11.2246 23.5089 10.8006 23.8215 10.4881C24.134 10.1755 24.558 9.99992 25 9.99992H30V3.33325Z" stroke="#6C6C6C" stroke-opacity="0.776471" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>

              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M28.3333 3.33325H11.6666C7.06427 3.33325 3.33331 7.06421 3.33331 11.6666V28.3333C3.33331 32.9356 7.06427 36.6666 11.6666 36.6666H28.3333C32.9357 36.6666 36.6666 32.9356 36.6666 28.3333V11.6666C36.6666 7.06421 32.9357 3.33325 28.3333 3.33325Z" stroke="#6C6C6C" stroke-opacity="0.776471" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.6667 18.95C26.8724 20.3371 26.6355 21.7537 25.9896 22.9984C25.3438 24.243 24.3219 25.2524 23.0694 25.8828C21.8169 26.5132 20.3974 26.7327 19.013 26.5099C17.6286 26.2871 16.3496 25.6335 15.3581 24.6419C14.3665 23.6504 13.7129 22.3715 13.4901 20.987C13.2674 19.6026 13.4868 18.1832 14.1172 16.9306C14.7477 15.6781 15.757 14.6562 17.0017 14.0104C18.2463 13.3646 19.6629 13.1277 21.05 13.3333C22.4649 13.5432 23.7748 14.2025 24.7862 15.2139C25.7976 16.2253 26.4569 17.5351 26.6667 18.95Z" stroke="#6C6C6C" stroke-opacity="0.776471" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M29.1667 10.8333H29.1834" stroke="#6C6C6C" stroke-opacity="0.776471" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>

            </div>

          </div>

        </div>

        <div className="content">
          
          <div className="inforBarber">
            <img src={barbeiro3} alt="" />
            <p>Lucas Silva</p>
          </div>
          

          <div className="info">
           
            <div className="redes-sociais">
              
              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.4008 7.58602C30.7829 5.96732 28.8608 4.68462 26.7451 3.81176C24.6295 2.9389 22.3621 2.49312 20.0734 2.50008C10.4688 2.50008 2.65 10.2798 2.64609 19.8438C2.64184 22.8892 3.44461 25.8814 4.97266 28.5157L2.5 37.5001L11.7383 35.0884C14.2955 36.4737 17.1581 37.1987 20.0664 37.1977H20.0734C29.6773 37.1977 37.4953 29.4173 37.5 19.854C37.5058 17.5732 37.058 15.314 36.1826 13.2078C35.3071 11.1017 34.0216 9.19071 32.4008 7.58602ZM20.0734 34.2704H20.0672C17.4745 34.2712 14.929 33.5773 12.6953 32.261L12.1664 31.9485L6.68437 33.3798L8.14766 28.0602L7.80312 27.5134C6.35343 25.2182 5.58535 22.5585 5.58828 19.8438C5.58828 11.8962 12.0891 5.42977 20.0789 5.42977C23.9117 5.42292 27.5903 6.93878 30.3055 9.64393C33.0208 12.3491 34.5504 16.022 34.5578 19.8548C34.5547 27.8032 28.057 34.2704 20.0734 34.2704ZM28.018 23.4743C27.5828 23.2571 25.4398 22.2087 25.043 22.0641C24.6461 21.9196 24.3531 21.847 24.0633 22.2813C23.7734 22.7157 22.9383 23.6876 22.6844 23.9806C22.4305 24.2735 22.1766 24.3056 21.7414 24.0884C21.3063 23.8712 19.9023 23.4141 18.2391 21.9376C16.9445 20.7884 16.0711 19.3696 15.8172 18.936C15.5633 18.5024 15.7898 18.2673 16.0078 18.0516C16.2039 17.8571 16.443 17.5454 16.6609 17.2923C16.8789 17.0391 16.9516 16.8579 17.0961 16.5688C17.2406 16.2798 17.1687 16.0266 17.0602 15.8102C16.9516 15.5938 16.0805 13.4602 15.718 12.5923C15.3641 11.747 15.0055 11.8618 14.7383 11.8485C14.4844 11.836 14.1914 11.8329 13.9031 11.8329C13.6827 11.8386 13.4659 11.8897 13.2662 11.983C13.0664 12.0763 12.888 12.2098 12.7422 12.3751C12.343 12.8095 11.218 13.8595 11.218 15.9907C11.218 18.122 12.7805 20.1845 12.9961 20.4735C13.2117 20.7626 16.0664 25.1399 20.4344 27.0173C21.2455 27.3646 22.0742 27.6692 22.9172 27.9298C23.9602 28.2595 24.9094 28.2134 25.6594 28.1016C26.4961 27.9774 28.2375 27.0532 28.5992 26.0407C28.9609 25.0282 28.9617 24.161 28.8531 23.9806C28.7445 23.8001 28.4539 23.6907 28.018 23.4743Z" fill="#6C6C6C" fill-opacity="0.776471"/>
              </svg>
              </a>

              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M30 3.33325H25C22.7899 3.33325 20.6702 4.21123 19.1074 5.77403C17.5446 7.33683 16.6667 9.45645 16.6667 11.6666V16.6666H11.6667V23.3333H16.6667V36.6666H23.3333V23.3333H28.3333L30 16.6666H23.3333V11.6666C23.3333 11.2246 23.5089 10.8006 23.8215 10.4881C24.134 10.1755 24.558 9.99992 25 9.99992H30V3.33325Z" stroke="#6C6C6C" stroke-opacity="0.776471" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>

              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M28.3333 3.33325H11.6666C7.06427 3.33325 3.33331 7.06421 3.33331 11.6666V28.3333C3.33331 32.9356 7.06427 36.6666 11.6666 36.6666H28.3333C32.9357 36.6666 36.6666 32.9356 36.6666 28.3333V11.6666C36.6666 7.06421 32.9357 3.33325 28.3333 3.33325Z" stroke="#6C6C6C" stroke-opacity="0.776471" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.6667 18.95C26.8724 20.3371 26.6355 21.7537 25.9896 22.9984C25.3438 24.243 24.3219 25.2524 23.0694 25.8828C21.8169 26.5132 20.3974 26.7327 19.013 26.5099C17.6286 26.2871 16.3496 25.6335 15.3581 24.6419C14.3665 23.6504 13.7129 22.3715 13.4901 20.987C13.2674 19.6026 13.4868 18.1832 14.1172 16.9306C14.7477 15.6781 15.757 14.6562 17.0017 14.0104C18.2463 13.3646 19.6629 13.1277 21.05 13.3333C22.4649 13.5432 23.7748 14.2025 24.7862 15.2139C25.7976 16.2253 26.4569 17.5351 26.6667 18.95Z" stroke="#6C6C6C" stroke-opacity="0.776471" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M29.1667 10.8333H29.1834" stroke="#6C6C6C" stroke-opacity="0.776471" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>

            </div>

          </div>

        </div>
        

      </div>
    </div>
  )
}