
import './App.css'
import CounterComponent from './components/CounterComponent'
import EventHandlingComponent from './components/EventHandlingComponent'
import ProfilePic from '../src/images/profile.jpg'
import DemoComponent from './components/DemoComponent'
import { ConditionalRendering } from './components/ConditionalRendering'
import { ProductListComponent } from './components/ProductListComponent'
import { RegularCss } from './components/RegularCss'
import { EmployeeComponent } from './components/EmployeeComponent'
import { FruitsComponent } from './components/FruitsComponent'

function App() {
  
  return (
    <>
      
      <DemoComponent name  =  'Nang Hwan Aye' country = 'England'>
      <h1>Hello I am React Developer...</h1>
      <img src="{ProfilePic}" width={200} height={300} alt="image"/>
      </DemoComponent>

      {/* <CounterComponent></CounterComponent> */}

      {/* <ProductListComponent></ProductListComponent> */}

      {/* <EventHandlingComponent></EventHandlingComponent> */}

      {/* <ConditionalRendering></ConditionalRendering> */}

      {/* <RegularCss></RegularCss> */}

      {/* <EmployeeComponent></EmployeeComponent> */}

      {/* <FruitsComponent></FruitsComponent> */}


   </>
  )
}

export default App
