import Btn from '../components/Btn'
import BackButton from '../components/BackButton'
import PhoneButton from '../components/PhoneButton'

export default function HolodObor() {
  return (
      <div className="holod_obor main">

        < Btn 
          url='/raschot'  
          img='../assets/images/menu-btn/menu-2.png'
          text='Расчет технологического оборудования'
        />
        < Btn 
          url='/postavka'  
          img='../assets/images/menu-btn/menu-4.png'
          text='Поставка и монтаж'
        />
        < Btn 
          url='/obslugivanie'  
          img='../assets/images/menu-btn/menu-2.png'
          text='Обслуживание'
        />
        < Btn 
          url='/remont'  
          img='../assets/images/menu-btn/menu-5.png'
          text='Ремонт'
        />
        < Btn 
          url='/your-teh-slugba'  
          img='../assets/images/menu-btn/menu-1.png'
          text='Ваша техническая служба'
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