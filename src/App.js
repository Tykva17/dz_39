import Smile from './components/Smile/Smile.js';
import smilesData from './components/smile.json';
import {useState} from "react";
import './App.css';
import ButtonResult from "./components/ButtonResult/ButtonResult";

function App() {

    const [winnKey, setWinnKey] = useState([]);
    const [showResult, setShowResult] = useState(false);
    let obj = {};
    const clickData = (clickID, clickVal) => {
        if(obj[clickID] === clickID){
            obj[clickID] = clickVal
        }else{
            obj[clickID] = clickVal ;
        }
    }

    function getMaxVal(){
        let arrVal = [];
        for(let key in obj){
            arrVal.push(obj[key])
        }
        return Math.max(...arrVal);
    }

    let getResult = (e) => {
        e.preventDefault();
        let arrValRes = [];
        for(let key in obj){
               if(obj[key] === getMaxVal()){
                   arrValRes.push(key)
               }
        }
        setWinnKey(arrValRes);
        console.log(winnKey.length)
        setShowResult(!showResult);
    }



  return (
    <div className="App">
      <div className='smile'>

          {
              (showResult) ?
                  smilesData.map( (el,i) => {
                      console.log(winnKey)
                      if(winnKey.length < 1){
                          return <Smile clickData={clickData} cID={i} srcImg={el.src} key={i}/>
                      }else if(winnKey.indexOf(`${i}`) !== -1) {
                          return <Smile clickData={clickData} classN={'winner'} cID={i} srcImg={el.src} key={i}/>
                      }
                  })
                  :
                  smilesData.map( (el,i) => {
                      return <Smile clickData={clickData} cID={i} srcImg={el.src} key={i}/>
                  })
          }

      </div>
      <ButtonResult getResult={getResult}/>
    </div>
  );
}

export default App;
