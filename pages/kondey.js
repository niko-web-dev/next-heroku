import Btn from '../components/Btn'
import BackButton from '../components/BackButton'
import PhoneButton from '../components/PhoneButton'

export default function Kondey() {
  return (
      <div className="restoran main">
        < Btn 
          url='/proektir'  
          img='../assets/images/menu-btn/menu-2.png'
          text='Проектирование'
        />
        < Btn 
          url='/montag'  
          img='../assets/images/menu-btn/menu-5.png'
          text='Монтаж'
        />
        < Btn 
          url='/obslygivanie'  
          img='../assets/images/menu-btn/menu-1.png'
          text= 'Обслуживание'
        />
        < Btn 
          url='/remont'  
          img='../assets/images/menu-btn/menu-3.png'
          text='Ремонт'
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
        < PhoneButton />
      </div>
  )
}