import { useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Adduser, Home,Edituser } from "./pages";
import { UserData } from "./data/UserData";

function App() {
  const [personData, setPersonData] = useState(UserData);
  const [addName, setAddName] = useState("");
  const [addAge, setAddAge] = useState("");

  const navigation = useNavigate();

  function handleCreate() {
    if(addName !== undefined);
    const newData = { name: addName, age: addAge };
    const data = [...personData];
    data.push(newData);
    console.log(data);
    setPersonData(data);
    navigation("/");
  }
  function handleEdit(i){
    const data = [...personData];
    console.log(data[i])
    // let name = data[i].name;
    // let age = data[i].age
    // setAddName(name)
    // setAddAge(age)
    

    
    navigation('edituser')
    navigation("/");
  }

  function handleDelete(i){
    const newData = [...personData];
    newData.splice(i,1);
    setPersonData(newData);

  }

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home personData={personData} handleEdit={handleEdit} handleDelete={handleDelete}/>} />
          <Route
            path="/adduser"
            element={
              <Adduser
                handleCreate={handleCreate}
                setAddAge={setAddAge}
                setAddName={setAddName}
              />
            }
          />
          <Route path="/edituser" element={<Edituser  setAddAge={setAddAge}
                setAddName={setAddName} handleEdit={handleEdit} addAge={addAge} addName={addName}/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
