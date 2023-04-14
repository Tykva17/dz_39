import {useState} from "react";

function Smile({srcImg, clickData, cID, classN}){
    const [count,setCount] = useState(0)

    const clickCounter = () => {
        setCount(count + 1);
        clickData(cID,count)
    }

    return <div className={`smile_box ${classN}`}>
                <div className='smile_box_img'>
                    <img src={srcImg} alt=""/>
                </div>
                <button id={cID} onClick={clickCounter}>+</button>
                <span>{count}</span>
           </div>
}

export default Smile;