import { useState } from "react"

const WithArray_Obj = () => {

    const [arrNum, setArrNum] = useState([10, 30, 40])

    const objEt = {
      name: "Ranit",
      age: 28,
      ph: 2345673425,
      Address: "Bhara-Banura"
    }
    const [objs, setObjs] = useState(objEt)

    const [num, setNum] = useState(10)


    const clickedBtn = () =>{
      //! ---- Type 1
    //     const newNum = [...arrNum];
    //     newNum.push(56)
    //     setArrNum(newNum)
      //!--- Type 2
        // setArrNum(prev=>[...prev, 67])

      //! ----- Type 3
      // setArrNum([30, 50, 45])
      
      //!------ Type 4
      setArrNum(pre=>pre.map(item=>item*5));
    }

    const clickObjBth = () =>{
      //! -------- Type 1
      // const newObj = {...objs};
      // newObj.name = "Ranit Mandal"
      // newObj.age = 21
      // newObj.Address = "Bishnupur-722157"
      // setObjs(newObj)

      //! ------- Type 2
      setObjs(prev=>({...prev, Address: "CSE"}))
    }

    const bunchUpdating = () =>{
      setNum(pre=>(pre+1))
      setNum(pre=>(pre+1))
      setNum(pre=>(pre+1))
      setNum(pre=>(pre+1))
      // increase by 4
    }

  return (
    <div className="h-screen w-full bg-amber-800">
      <h1 className="w-full bg-amber-400 text-gray-700 p-5 text-4xl text-bold text-center mb-20">updating of  Array / Object / immutable </h1>

      <div className="flex gap-10 justify-around items-center">
        <div className="bg-blue-400 w-fit p-10 rounded-4xl">
        <h1 className="w-fit bg-amber-400 text-gray-700 p-3 text-3xl text-bold text-center rounded-2xl"> Array </h1>

        <h1 className="w-fi text-gray-700 p-3 text-2xl text-bold text-center rounded-2xl">array : - {arrNum.join(",")}</h1>
        <button
        className='bg-gray-300 cursor-pointer p-5 rounded-2xl w-fit' 
        onClick={clickedBtn}>Click</button>
      </div>

      <div className="bg-blue-400 w-fit p-10 rounded-4xl">
        <h1 className="w-fit bg-amber-400 text-gray-700 p-3 text-3xl text-bold text-center rounded-2xl"> Objects </h1>

        <h1 className="w-fi text-gray-700 p-3 text-2xl text-bold text-center rounded-2xl">Name: {objs.name}, Age: {objs.age}, Address: {objs.Address}</h1>
        <button
        className='bg-gray-300 cursor-pointer p-5 rounded-2xl w-fit' 
        onClick={clickObjBth}>Click</button>
      </div>

      <div className="bg-blue-400 w-fit p-10 rounded-4xl flex gap-10">
        <h1 className="bg-gray-500 text-white text-4xl p-10 rounded-3xl">
          {num}
        </h1>
        <button className='bg-gray-300 cursor-pointer p-5 rounded-2xl w-fit' onClick={bunchUpdating}>click</button>
      </div>
      </div>
    </div>
  )
}

export default WithArray_Obj

