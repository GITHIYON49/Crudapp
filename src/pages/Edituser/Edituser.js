import React from 'react'
import { Input,Button } from '../../components'

const Edituser = ({setAddAge,setAddName,handleEdit}) => {
  return <>
  <div className='w-full flex flex-col items-center justify-center'>
  <h2 className='text-gray-400 text-xl capitalize font-bold'>Edit user</h2>
    <div className='w-3/5 flex flex-col gap-4 border-2 p-4'>
    <Input type='text' onChange={(e)=>{setAddName(e.target.value)}} placeholder='Enter your name'/>
    <Input type='number' onChange={(e)=>{setAddAge(e.target.value)}} placeholder='Age'/>
    <Button name={`Update`} className={`w-full bg-yellow-400  hover:bg-yellow-300`} onClick={handleEdit}/>
    </div>
  </div>

  </>
}

export default Edituser;