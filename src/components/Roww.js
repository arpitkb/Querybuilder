import React, {useState,useContext, useEffect} from 'react'
import { QueryContext } from '../context/query-context'
import Select from './Select'
import { Rule,zz } from '../data'
// console.log(Rule)



function Roww({item,i,j}) {

    const {deleteQuery} = useContext(QueryContext)
    const {Field, Condition}  = item


    const clickHandler = () =>{
            deleteQuery(i,j);
    }

    // options in delect menu
    const [b,setB] = useState([])
    const [c,setC] = useState([])

    // updating options array
    useEffect(()=>{
        setB(Field ? zz[Field].conditions : [])
        setC(Field && Condition? zz[Field].criteria[Condition] : [])

    },[Field,Condition])

  return (
    
    <div className='grid grid-cols-10 gap-8 mt-4'>
        <div className='col-span-3'>
            <Select className='' label='Field' arr={Rule.fields} type='field' i={i} j={j} />
        </div>
        <div className='col-span-3'>
            <Select label='Condition' arr={b} type='condition' i={i} j={j}/>
        </div>
        <div className='col-span-3'>
            <Select label='Criteria' arr={c} type='criteria' i={i} j={j}/>
        </div>

        <svg onClick={clickHandler} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7E8083" className="w-8 mb-1 p-1 rounded-[4px] mt-auto col-span-1 bg-white bg-opacity-10 border-[#404348] border hover:cursor-pointer hover:bg-opacity-5">
            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
        </svg>


    </div>
    
  )
}

export default Roww