import React from "react";
// import Adduser from '../Add-user/Adduser';
import { Button } from "../../components";
import { Trash } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



const Home = ({personData,handleEdit,handleDelete}) => {
  const navigation = useNavigate();

  function handleClick(){
    console.log('hello')
    navigation('/adduser')
  }
  return (
    <>
      <section className="h-[80vh] flex flex-col gap-3 items-center justify-center">
        <table className="w-3/5">
          <thead className="text-xl" >
            <tr>
              <th className="border-2 border-gray-400">Name</th>
              <th className="border-2 border-gray-400">Age</th>
              <th className="border-2 border-gray-400">Edit</th>
              <th className="border-2 border-gray-400">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              personData.map((users,index)=>{
               return <tr key={index} className="text-center">
              <td className="border-2 border-gray-400 capitalize p-2">{users.name}</td>
              <td className="border-2 border-gray-400 p-2">{users.age}</td>
              <td className="border-2 border-gray-400 capitalize p-2"><Button name='update' icons={<Pencil/>} onClick={()=>{handleEdit(index)
                navigation('edituser')}}  className='w-4/5 bg-blue-500 text-white flex items-center justify-center gap-2'/></td>
              <td className="border-2 border-gray-400 capitalize p-2"><Button name='delete' icons={<Trash/>} onClick={()=>handleDelete(index)}  className='w-4/5 bg-red-500 text-white flex items-center justify-center gap-2'/></td>
            </tr>

              })
            }
            
          </tbody>
        </table>
        <div className="w-3/5">
        <Button className={`w-full bg-yellow-400 hover:bg-yellow-300`} name={`create`} onClick={handleClick}/>
        </div>
      </section>
    </>
  );
};

export default Home;
