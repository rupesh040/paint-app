import React from 'react'

const Menu = ({setLineColor,setLineWidth,setLineOpacity}) => {
  return (
    <div className=' menu flex items-center justify-center p-8 max-w-[800px] bg-orange-300 m-auto flex-wrap gap-3 mt-5 rounded-2xl overflow-hidden sm:max-w-[90%] pt-10'>
        <h1 className='absolute top-4 left-[50%] translate-x-[-50%] translate-y-[-50%]  text font-bold'>Drawing App</h1>
        <div className=' flex justify-center items-center gap-2'>
        <label for="color"> Pick color:</label>
        <input type="color" id='color' onChange={(e)=>{setLineColor(e.target.value);}} /></div>
        <div className=' flex justify-center items-center gap-2'>
        <label for="width"> Width:</label>
        <input type="range" min={3} max={20}  id="width"  onChange={(e)=>{setLineWidth(e.target.value);}} /></div>
        <div className=' flex justify-center items-center gap-2'>
        <label for="opacity"> opacity:</label>
        <input type="range" min={1} max={100}  id="opacity" onChange={(e)=>{setLineOpacity(e.target.value);}}/></div>
        <div class="circle w-52 h-52 b rounded-full absolute top-[0%] left-[-10%] translate-x-[-50%]
  translate-y-[-50%] z-[-1] bg-gradient-to-r from-purple-500 to-pink-500 blur-[100px]" ></div>
    <div class="circle w-44 h-44 b rounded-full absolute top-[100%] left-[110%] translate-x-[-50%]
  translate-y-[-50%] z-[-1] bg-gradient-to-r from-sky-500 to-indigo-500 blur-3xl" ></div>
    </div>
  )
}

export default Menu
