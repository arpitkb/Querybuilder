import React, {useContext} from 'react'
import { QueryContext } from '../context/query-context'

const Header = () => {

  const {queryString} = useContext(QueryContext)

  return (
    <div className='flex flex-col items-start px-[32px] py-[18px] bg-[#5C61F0]'>
        <div className='font-bold text-[20px] leading-[28px] text-white mb-3'>Build your query</div>
        {
          queryString ? 
          <p className='fon font-medium text-[15px] text-[#ffffff] self-stretch order-1 w-fit px-3 bg-[#4338CA] rounded-[5px] py-2'><span className='f font-bold'>Query : </span>{queryString}</p>
          :
          <div className='font-normal text-[14px] leading-[15px] text-[#A5B4FC] self-stretch order-1 w-[912px] h-[20px]'>Your query will be shown here</div>
        }
    </div>
  )
}

export default Header