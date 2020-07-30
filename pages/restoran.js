import Btn from '../components/Btn'
import BackButton from '../components/BackButton'
import PhoneButton from '../components/PhoneButton'

export default function Restoran() {
  return (
      <div className="restoran main">
        < Btn 
          url='/ventilyatsya'  
          img='../assets/images/menu-btn/menu-5.png'
          text='Вентиляция'
        />
        < Btn 
          url='/kondey'  
          img='../assets/images/menu-btn/menu-3.png'
          text='Кондицианирование'
        />
        < Btn 
          url='/holod-obor'  
          img='../assets/images/menu-btn/menu-4.png'
          text='Холодильное оборудование'
        />
        < Btn 
          url='/tepl-obor'  
          img='../assets/images/menu-btn/menu-3.png'
          text='Тепловое оборудование'
        />
        < Btn 
          url='/beer-system'  
          img='../assets/images/menu-btn/menu-1.png'
          text='Пивная система'
        />
        < Btn 
          url='/skud'  
          img='../assets/images/menu-btn/menu-5.png'
          text='СКУД'
        />
        < Btn 
          url='/tech-help'  
          img='../assets/images/menu-btn/menu-2.png'
          text='Тепловое оборудование'
        />
        < Btn 
          url='/special'  
          img='../assets/images/menu-btn/menu-2.png'
          text='Специальные услуги'
        />
        < Btn 
          url='/cabinet'  
          img='../assets/images/menu-btn/menu-3.png'
          text='Личный кабинет'
        />
        < Btn 
          url='/contact'  
          img='../assets/images/menu-btn/menu-4.png'
          text='Контакты'
        />
        <BackButton />
        <PhoneButton />
      </div>
  )
}