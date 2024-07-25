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
    const newData = { name: addName, age: addAge };
    const data = [...personData];
    data.push(newData);
    console.log(data);
    setPersonData(data);
    navigation("/");
  }
  function handleEdit(){
    console.log('edit')
    navigation("/");
  }
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home personData={personData} />} />
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
                setAddName={setAddName} handleEdit={handleEdit}/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
