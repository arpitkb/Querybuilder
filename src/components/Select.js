import { Fragment, useState, useContext } from 'react'
import {QueryContext} from '../context/query-context'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Select({label, arr ,type,i,j}) {

  const queryCtx= useContext(QueryContext)

  const [selected, setSelected] = useState('')

  // listening to changes in select menu
  const onChange = (e)=>{
      if(type==='field') queryCtx.updateQuery(i,j,'Field',e)
      if(type === 'condition') queryCtx.updateQuery(i,j,'Condition',e)
      if(type === 'criteria') queryCtx.updateQuery(i,j,'Criteria',e)
      setSelected(e)
  }

  return (
    <div>
    <Listbox value={selected} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-white mb-3">{label}</Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-[5px] border border-[#404348] bg-white bg-opacity-10 py-2 pl-3 pr-10 text-left shadow-sm focus:border-[#cccccc] focus:border-opacity-10 focus:outline-none sm:text-sm">
              <span className="flex items-center text-white">
                <span className="ml-3 block truncate">{selected?selected:`Select ${label}`}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto bg-[#282B30] border border-[#404348] rounded-[5px] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {arr && arr.map((item,index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? ' bg-[#cccccc] bg-opacity-10' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9 text-white'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center text-white">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {item}
                          </span>
                        </div>

                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
    </div>
  )
}
