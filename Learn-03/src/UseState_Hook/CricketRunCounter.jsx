import React, { useState } from 'react'

const CricketRunCounter = () => {

    const [ballCount, setBallCount] = useState(0)
    const [overCount, setOverCount] = useState(0)
    const [runCountOver, setRunCountOver] = useState(0)
    const [totalRun, setTotalRun] = useState(0)
    const [wicket, setWicket] = useState(0)
    const [boundary, setBoundary] = useState(0)
    const [countSix, setCountSix] = useState(0)
    const [countFour, setCountFour] = useState(0)

    if(ballCount == 6){
        setOverCount(overCount+1);
        setBallCount(0);
        setRunCountOver(0);
    }

    if(overCount == 20){
        alert
    }
    
  return (
    <div className='w-full h-screen bg-gray-400 flex flex-col justify-between items-center'> 
        <h1 className='w-full bg-amber-400 text-gray-700 p-5 text-4xl text-bold text-center'> Task 2- Cricket Run Counter</h1>
        <div className='w-150 h-fit bg-gray-100 rounded-4xl p-10 flex justify-around items-center text-2xl leading-10 font-bold text-gray-600'>
            <div>
                <p> Ball Count: {ballCount}</p>
                <p> Over Count: {overCount}</p>
                <p> Run run/over.ball: {runCountOver}/{overCount}.{ballCount}</p>
                <p> Total Run/wicket: {totalRun}/{wicket}</p>
            </div>
            <div className='w-3 h-full bg-amber-600 rounded-3xl'></div>
            <div>
                <p>Total Boundary: {boundary}</p>
                <p>Total 6 hits: {countSix}</p>
                <p>Total 4 hits: {countFour}</p>
            </div>
        </div>
        <div className= "p-5 m-5 rounded-2xl flex gap-10 justify-around items-center">
            <div className='flex flex-col gap-5'>
                <input
                className='bg-gray-200 border-0 rounded-2xl p-5'
                id = "run" type='number' placeholder='Enter run in no ball'/>
                <button
                onClick={()=>{
                    let run = document.getElementById("run").value;
                    setRunCountOver(runCountOver + Number(run) + 1);
                    setTotalRun(totalRun+Number(run) + 1)
                    document.getElementById("run").value = "";
                }}  
                className='bg-gray-300 cursor-pointer p-5 rounded-2xl w-fit'> No Ball </button>
            </div>

            <button 
            onClick={()=>{
                setBallCount(ballCount+1);
            }}
            className='bg-gray-300 cursor-pointer p-5 rounded-2xl h-fit'>Dot Ball</button>

            <button 
            onClick={()=>{
                setRunCountOver(runCountOver + 1);
                setTotalRun(totalRun+1);
                setBallCount(ballCount+1);
            }}
            className='bg-gray-300 cursor-pointer p-5 rounded-2xl h-fit'>Run 1</button>

            <button
            onClick={()=>{
                setRunCountOver(runCountOver + 2);
                setTotalRun(totalRun+2);
                setBallCount(ballCount+1);
            }} 
            className='bg-gray-300 cursor-pointer p-5 rounded-2xl h-fit'>Run 2</button>

            <button
            onClick={()=>{
                setRunCountOver(runCountOver + 3);
                setTotalRun(totalRun+3);
                setBallCount(ballCount+1);
            }} 
            className='bg-gray-300 cursor-pointer p-5 rounded-2xl h-fit'>Run 3</button>

            <button
            onClick={()=>{
                setRunCountOver(runCountOver + 4);
                setTotalRun(totalRun+4);
                setBallCount(ballCount+1);
                setBoundary(boundary+1);
                setCountFour(countFour+1);
            }}
            className='bg-gray-300 cursor-pointer p-5 rounded-2xl h-fit'>Run 4</button>

            <button
            onClick={()=>{
                setRunCountOver(runCountOver + 6);
                setTotalRun(totalRun+6);
                setBallCount(ballCount+1);
                setBoundary(boundary+1);
                setCountSix(countSix+1);
            }} 
            className='bg-gray-300 cursor-pointer p-5 rounded-2xl h-fit'>Run 6</button>

            <button
            onClick={()=>{
                setWicket(wicket+1)
                setBallCount(ballCount+1)
            }} 
            className='bg-gray-300 cursor-pointer p-5 rounded-2xl h-fit'> Wicket</button>
        </div>
    </div>
  )
}

export default CricketRunCounter
