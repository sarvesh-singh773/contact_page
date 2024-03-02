import { useState } from "react";
import Data from "./component/Data"
import FormBox from "./component/FormBox"
import HeadingText from "./component/HeadingText"
import Navbar from "./component/Navbar"
import UserContext from "./context/UserContext";

function App() {

  let obj = [{Name : "Sarvesh" , Email : "singhji012002@gmail.com" , Text:"This is my app"},
  {Name : "Sarvesh" , Email : "singhji012002@gmail.com" , Text:"This is my app"}]
  
  const [objArr , setObjArr] = useState(obj);
  
  const [showstore , setShowStore] = useState(false);
  

  return (
    <UserContext.Provider value={{showstore , setShowStore , objArr , setObjArr}}>
     <Navbar />
      {
        showstore ? <Data /> :<div>
        <HeadingText />
        <FormBox />
        </div> 
      }
     
    </UserContext.Provider>
  )
}

export default App
