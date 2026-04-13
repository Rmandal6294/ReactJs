import { useEffect, useState } from "react"

const UseEffectHook = () => {
    const [num1, setNum1] = useState(0)


    // Runs ONLY ONCE (on mount)
    useEffect(() => {
        const tag = document.getElementById("withUseEffect");
        if (tag) {
            const newEle = document.createElement("p");
            const randomnumber = Math.random()
            console.log("div1 "+randomnumber)
            newEle.innerHTML = `Created on Mount with empty dependencies. ${randomnumber}`;
            tag.appendChild(newEle);
        }
    }, [])

    // Runs ON EVERY RENDER (whenever num1 changes)
    useEffect(() => {
        const tag = document.getElementById("WithOut"); // Fixed: capital 'W' to match JSX
        if (tag) {
            const newEle = document.createElement("p"); // Fixed: used 'document'
            const randomnumber = Math.random()
            console.log("div2 "+randomnumber)
            newEle.innerHTML = `Created on Mount without any dependencies. ${randomnumber}`;
            tag.appendChild(newEle);
        }
    })

    function simFun(){
        const tag = document.getElementById("simFun");
        if (tag) {
            const newEle = document.createElement("p");
            const randomnumber = Math.random()
            console.log("div3 "+randomnumber)
            newEle.innerHTML = `Created on Mount with empty dependencies. ${randomnumber}`;
            tag.appendChild(newEle);
    }}

    return (
        <div style={{minHeight: "400px"}}>
            <p className="heading">UseEffect Hook</p>
            <div>
                <div>Count: {num1}</div>
                <button onClick={() => setNum1(num1 + 1)}>
                    Add to Count
                </button>
                <div id="withUseEffect" style={{ border: '1px solid green', margin: '5px' }}>
                    <strong>Box 1 (Runs once) UseEffect with empty/dependencies:</strong>
                </div>
                <div id="WithOut" style={{ border: '1px solid blue', margin: '5px' }}>
                    <strong>Box 2 (Runs every click) UseEffect without empty/dependencies:</strong>
                </div>
                <div id="simFun" style={{ border: '1px solid blue', margin: '5px' }}>
                    {simFun()}
                    <strong>Box 3 (Runs every click) normal function:</strong>
                </div>
            </div>
        </div>
    )
}
export default UseEffectHook