import React, { useEffect, useState } from 'react'
import nlogo from '../pages/mic-microphone-icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { chachResult } from '../utils/searchSlice'





const Search = () => {

  const [search,setsearch]=useState("")
  const [suggetion,setsuggetion]=useState([])
  const [show,setshow]=useState(false)

  // const [select,seselect]=useState("")

  const searchcach=useSelector(store=>store.search)
  const dispatch=useDispatch()


  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(searchcach[search]){
        setsuggetion(searchcach[search])
      }else{
        searchquery()
      }
  },200)

    return(
      ()=>{
        clearTimeout(timer)
      }
    )
  },[search])


  async function searchquery(){
    const sear=await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+search)
    const searjson=await sear.json()

    setsuggetion(searjson[1])

    dispatch(chachResult({
      [search]:searjson[1]
    }))
  }

  function handle(i){
    console.log(i)
    console.log("Sandeep Sharma")
  }



  return (
    <div className='w-[732px] flex justify-end'>
        <div className=' flex w-[637px]'>
            <div className=''>
              <div className='flex'>
                <input
                  placeholder='Search'
                  className='pl-[16px] border-l border-t border-b border-solid border-[#c6c6c6] w-[515px] h-[40px] rounded-l-full'
                  type="text"
                  value={search}
                  onChange={(e)=>setsearch(e.target.value)}
                  onFocus={()=>setshow(true)}
                  onBlur={()=>setshow(false)}
                  />

                  <div className='w-[64px] border border-solid border-[#c6c6c6] h-[40px] rounded-r-full flex justify-center items-center bg-[#e9e9e9] '>
                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="24" viewBox="0 0 24 24" width="24" focusable="false" className="mx-[5px] pointer-events: none; display: block; width: 100%; height: 100%;"><path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
                  </div>
                </div>

                {
                  search&&show&&<div className='fixed rounded-md bg-white  m-[3px] w-[510px]'>
                  <ul>
                    {
                      suggetion.map((tr)=>
                      <div onClick={()=>handle(tr)}>
                      <li className='font-semibold flex p-[5px] hover:bg-slate-200' key={tr}>
                      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="24" viewBox="0 0 24 24" width="24" focusable="false" className="mx-[5px] pointer-events: none; display: block; width: 100%; height: 100%;"><path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
                        {tr}
                      </li>
                      </div>)
                    }
                  </ul>
                </div>
                }
            </div>

            <div className='w-[40px] h-[38px] ml-[16px] flex justify-center items-center rounded-full hover:bg-gray-200'>
                <img src={nlogo} className='h-[20px]'/>
            </div> 
        </div>
    </div>
  )
}

export default Search