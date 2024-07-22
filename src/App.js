import { useState } from 'react';
import './App.css';
import { Navbar} from './components';
import { Route,Routes,BrowserRouter,useNavigate } from 'react-router-dom';
import { Adduser,Home } from './pages';
import { UserData } from './data/UserData';

function App() {
  const[addName,setAddName]=useState('');
  const[addAge,setAddAge]=useState('');

  console.log(addName,addAge)

  // const navigation = useNavigate();

  function handleCreate(){
    const data = UserData;
    const newData = data.push({name:addName,age:addAge})


    console.log(newData)

  }
  return<>
  
  <BrowserRouter>
   <Navbar/>
   <main>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/add-user' element={<Adduser handleCreate={handleCreate} setAddAge={setAddAge}setAddName={setAddName}/>}/>
    <Route/>
   </Routes>
   </main>
   </BrowserRouter>

  </>
}

export default App;
