import { useEffect, useState } from 'react'

const UseEffectHook2 = () => {

    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)

    useEffect(()=>{
        console.log("num ")
        const tag = document.getElementById("f1");
        if(tag){
            const elm = document.createElement("span")
            elm.innerHTML = "Num1 Update...."
            tag.appendChild(elm);
        }
    },[num])

    useEffect(()=>{
        console.log("num2 ")
        const tag = document.getElementById("s2");
        if(tag){
            const elm = document.createElement("span")
            elm.innerHTML = "Num2 Update...."
            tag.appendChild(elm);
        }
    },[num2])

  return (
    <div>
        <div style={{ border: '1px solid green', margin: '5px', borderRadius: "10px", maxWidth: "90%", overflow: "auto"}}>{num} 
            <button
            style={{ marginLeft: '50px'}}  
            onClick={()=>setNum(num+1)}> Click </button>

            <p id ="f1"></p>
        </div><br/>

        <div style={{ border: '1px solid green', margin: '5px', borderRadius: "10px", maxWidth: "90%", overflow: "auto"}}>{num2} 
            <button
            style={{ marginLeft: '50px'}} 
            onClick={()=>setNum2(num2+1)}> Click </button>
            
            <p id ="s2"></p>
        </div>
    </div>
  )
}

export default UseEffectHook2
