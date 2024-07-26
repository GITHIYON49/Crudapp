import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Adduser, Home, Edituser } from "./pages";
import { UserData } from "./data/UserData";

function App() {
  const [personData, setPersonData] = useState(UserData);
  const [addName, setAddName] = useState("");
  const [addAge, setAddAge] = useState("");

  const navigation = useNavigate();

  function handleCreate() {
    if (addName !== undefined);
    const newData = { name: addName, age: addAge };
    const data = [...personData];
    data.push(newData);
    console.log(data);
    setPersonData(data);
    navigation("/");
  }
  
  function handleDelete(i) {
    const newData = [...personData];
    newData.splice(i, 1);
    setPersonData(newData);
  }

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                personData={personData}
                handleDelete={handleDelete}
              />
            }
          />
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
          <Route
            path="/edituser"
            element={
              <Edituser personData={personData}/>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
