
import './App.css'
import {Button} from "@nextui-org/react";
import Header from './Components/Header';
import Navb from './Components/Header';
import Hero from './Components/Hero';
import DBS from './Components/DBS';

function App() {
  

  return (
    <>
    <main className="overflow-x-hidden">
      <Header/>
      <div className="w-full max-w-[1440px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto">
        <div className=""> 
          <Hero/>
          <DBS/>

        </div>
      </div>
    </main>
     
     
    </>
  )
}

export default App
