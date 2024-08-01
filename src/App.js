import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import { Routs } from "./components";
import { UserData } from "./data";

export const ListContex = createContext();

function App() {
  const [personData, setPersonData] = useState(UserData);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      <Navbar />
      <main>
        <ListContex.Provider
          value={{ personData, setPersonData, name, setName, age, setAge }}
        >
          <Routes>
            {Routs?.map((rout, i) => {
              return <Route key={i} path={rout.path} element={rout.element} />;
            })}
          </Routes>
        </ListContex.Provider>
      </main>
    </>
  );
}

export default App;
