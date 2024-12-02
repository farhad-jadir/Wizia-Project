
import './App.css'
import {Button} from "@nextui-org/react";
import Header from './Components/Header';
import Navb from './Components/Header';
import Hero from './Components/Hero';
import DBS from './Components/DBS';
import Control from './Components/Control';
import Train from './Components/Train';

function App() {
  

  return (
    <>
    <main className="overflow-x-hidden">
      <Header/>
      <div className="w-full px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto bg-[#02242A] bg-[url(Img.png)] bg-no-repeat bg-cover m-0 p-0">
        <div className=""> 
          <Hero/>
        </div>
      </div>  
      <DBS/>
      <div className=''>
        <Control/>
        
        
        
      </div>
      <div className="w-full px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto bg-[#02242A]">
        <div className=""> 
          <Train/>
        </div>
      </div>
      
    </main>
     
     
    </>
  )
}

export default App
