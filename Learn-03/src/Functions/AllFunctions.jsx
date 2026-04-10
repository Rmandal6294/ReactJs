
const AllFunctions = () => {
    var x ;
    var y ;
  return (
    <div className="w-full h-screen bg-gray-500 flex flex-col gap-8 justify-center items-center">
        <h1 className='w-full bg-amber-400 text-gray-700 p-5 text-4xl text-bold text-center rounded-4xl'> Task 1 - Locate Cursor Using Only React Function </h1>
      <div 
      onMouseMove={(elem)=>{
        x = elem.clientX;
        y = elem.clientY;
        console.log(`X-axis: ${x} || Y-axis: ${y}`)
      }}
      className=" w-[80vh] h-[80vh] bg-gray-300 rounded-4xl">
        <p className="bg-gray-900 text-2xl text-green-400 p-2 rounded-xl flex justify-center items-center text-center">
            At first Open Console. Then hover over here on box.
        </p>
      </div>
    </div>
  )
}

export default AllFunctions
