// import Link from 'next/link'

import Btn from '../components/Btn'
import BackButton from '../components/BackButton'
import PhoneButton from '../components/PhoneButton'

export default function MinimalPage() {
  return (
      <div className="minimal_page main">
        < Btn 
          url='/restoran'  
          img='../assets/images/menu-btn/menu-1.png'
          text='Я в ресторане/баре (для hoREcatn)'
        />
        < Btn 
          url='/hotel'  
          img='../assets/images/menu-btn/menu-2.png'
          text='Я в гостинице/хостеле (для HOreca)'
        />
        < Btn 
          url='/market'  
          img='../assets/images/menu-btn/menu-3.png'
          text='Я в магазине (для ритейла)'
        />
        < Btn 
          url='/ts'  
          img='../assets/images/menu-btn/menu-4.png'
          text='Я в ТЦ/БЦ'
        />
        < Btn 
          url='/med'  
          img='../assets/images/menu-btn/menu-5.png'
          text='Для медицинских учреждений'
        />
        < Btn 
          url='/live'  
          img='../assets/images/menu-btn/menu-1.png'
          text='Для жилых площадей'
        />
        < Btn 
          url='/your-teh-slugba'  
          img='../assets/images/menu-btn/menu-4.png'
          text='Ваша техническая служба'
        />
        < Btn 
          url='/spec'  
          img='../assets/images/menu-btn/menu-3.png'
          text='Специальные услуги'
        />
        < Btn 
          url='/lk'  
          img='../assets/images/menu-btn/menu-5.png'
          text='Личный кабинет'
        />
        < Btn 
          url='/contact'  
          img='../assets/images/menu-btn/menu-2.png'
          text='Контакты'
        />
        <BackButton />
        <PhoneButton />
      </div>
  )
}