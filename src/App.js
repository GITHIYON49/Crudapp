import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Adduser, Home, Edituser } from "./pages";
import { UserData } from "./data/UserData";

function App() {
  const [personData, setPersonData] = useState(UserData);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const navigation = useNavigate();

  const ids = personData.length + 1;

  function handleCreate() {
    if (name !== undefined);
    const newData = { name: name, age: age, id: ids };
    const data = [...personData];
    data.push(newData);
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
              <Home personData={personData} handleDelete={handleDelete} />
            }
          />
          <Route
            path="/adduser"
            element={
              <Adduser
                handleCreate={handleCreate}
                setAge={setAge}
                setName={setName}
              />
            }
          />
          <Route
            path="/edituser"
            element={<Edituser personData={personData} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
