import Smile from './components/Smile/Smile.js';
import smilesData from './components/smile.json';
import {useState} from "react";
import './App.css';
import ButtonResult from "./components/ButtonResult/ButtonResult";

function App() {

    const [winnKey, setWinnKey] = useState([]);
    const [showResult, setShowResult] = useState(false);
    let obj = {};
    let maxValResult = 0;
    const clickData = (clickID, clickVal) => {
            obj[clickID] = clickVal;
    }

    function getMaxVal(){
        maxValResult = Math.max(...Object.values(obj));
    }

    let getResult = (e) => {
        e.preventDefault();
        getMaxVal();
        let arrValRes = [];
        for(let key in obj){
               if(obj[key] === maxValResult){
                   arrValRes.push(key);
               }
        }
        setWinnKey(arrValRes);
        setShowResult(!showResult);
    }

  return (
    <div className="App">
      <div className='smile'>

          {
              (showResult) ?
                  smilesData.map( (el,i) => {
                      if(winnKey.length < 1){
                          return <Smile clickData={clickData} cID={i} srcImg={el.src} key={i}/>;
                      }else if(winnKey.indexOf(`${i}`) !== -1) {
                          return <Smile clickData={clickData} classN={'winner'} cID={i} srcImg={el.src} key={i}/>;
                      }
                  })
                  :
                  smilesData.map( (el,i) => {
                      return <Smile clickData={clickData} cID={i} srcImg={el.src} key={i}/>;
                  })
          }

      </div>
      <ButtonResult getResult={getResult}/>
    </div>
  );
}

export default App;