
import './App.css'
import {Button} from "@nextui-org/react";
import Header from './Components/Header';
import Navb from './Components/Header';
import Hero from './Components/Hero';

function App() {
  

  return (
    <>
    <main className="overflow-x-hidden">
      <Header/>
      <div className="w-full max-w-[1440px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto">
        <div className="space-y-[128px]"> 
          <Hero/>

        </div>
      </div>
    </main>
     
     
    </>
  )
}

export default App
