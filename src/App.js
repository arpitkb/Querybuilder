import { useContext, useEffect } from 'react';
import { QueryContext } from './context/query-context';
import Header from './components/Header';
import Roww from './components/Roww';
import {ToggleSwitch} from 'flowbite-react'

function App() {

  const {Queries,addQuery, toggleConjuction, updateQueryString,queryString,addGroupQuery,deleteGroupQuery} = useContext(QueryContext)


  // updating string query as the Queries array is changed
  useEffect(()=>{
    updateQueryString();
  },[Queries])

  
  const clickHandler = (i)=>{
      addQuery(i)
  }

  const finishHandler = () =>{
      if(queryString.trim()==='') alert('No query detected')
      else alert(queryString)
  }

  return (
    <div className='bg-[#1D2025] min-h-screen'>
      <Header/>
      <div className='p px-52 pt-20 pb-8'>
        {Queries.map((el,index)=>(
            
            <div key={index} className='p-5 box-border bg-[#282B30] border-[#404348] rounded-[4px] border-[1px] mb-12'>
              <div className='flex text-white'>
                <span className='mr-4'>OR</span>
              <ToggleSwitch
                checked={el.conjuction}
                className='opacity-50'
                onChange={(e)=>{
                  toggleConjuction(index)
                  updateQueryString()
                  }}
              />
              <span>AND</span>
              </div>
              {el.queries.map((q,idx)=>(
                <Roww key={idx} item={q} i={index} j={idx}/>
              ))}
              <div className='flex justify-between'>
                <button onClick={()=>{clickHandler(index)}} className='text-white flex items-center px-[12px] py-[7px] bg-[#4f46e5] rounded-[6px] mt-14'>Add Filter</button>
                {index!=0 && <svg onClick={()=>{deleteGroupQuery(index)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7E8083" className="w-9 p-1 rounded-[4px] mt-auto col-span-1 bg-white bg-opacity-10 border-[#404348] border hover:cursor-pointer hover:bg-opacity-5">
                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                </svg>}
            </div>
          </div>
        ))}
      <button onClick={()=>{addGroupQuery()}} className='d flex items-center px-[12px] py-[7px] bg-[#4f46e5] text-white rounded-[6px] mt-5'>Add new group filter</button>
      </div>
      <div className='flex justify-between px-36 pb-6'>
        <button className='d flex items-center px-[12px] py-[7px] bg-[#6D7175] rounded-[6px] mt-14'>Cancel</button>
        <button onClick={finishHandler} className='d flex items-center px-[12px] py-[7px] bg-[#4f46e5] text-white rounded-[6px] mt-14'>Finish</button>

      </div>
    </div>
  );
}

export default App;
