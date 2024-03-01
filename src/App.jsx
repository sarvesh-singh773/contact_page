import { useState } from "react";
import Data from "./component/Data"
import FormBox from "./component/FormBox"
import HeadingText from "./component/HeadingText"
import Navbar from "./component/Navbar"


function App() {

  let obj = [{Name : "Sarvesh" , Email : "singhji012002@gmail.com" , Text:"This is my app"},
  {Name : "Sarvesh" , Email : "singhji012002@gmail.com" , Text:"This is my app"}]
  
  const [objArr , setObjArr] = useState(obj);
  
  const [showstore , setShowStore] = useState(false);
  
  function setObj(item)
  {
    let newarr = [...objArr , item];
    setObjArr(newarr);
  }  

  function handalstoreData()
  {
    setShowStore((prev) => !prev);
  }
  return (
    <>
     <Navbar handalstoreData={handalstoreData} showstore={showstore}/>
      {
        showstore ? <Data obj={objArr} /> :<div>
        <HeadingText />
        <FormBox setObj={setObj}/>
        </div> 
      }
     
    
     
    </>
  )
}

export default App
