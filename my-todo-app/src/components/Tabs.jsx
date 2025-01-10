import React, { useState } from 'react'

const Tabs = (props) => {
    const {selectedTab,handleTab} = props
    const tabs = ["All","Pending","Completed"]
  return (
    <div className='flex py-4 px-8 my-4 gap-4 border-b-2'>
        {
            tabs.map((tab,index)=>{
                return(
                    <button key={index} className={`${selectedTab === tab? 'bg-slate-600 text-zinc-100' : 'text-slate-600 bg-zinc-100'}
                         text-xl font-mono  p-3 rounded-md cursor-pointer`} onClick={()=>handleTab(tab)}>{tab}</button>
                )
            })
        }
    </div>
  )
}

export default Tabs