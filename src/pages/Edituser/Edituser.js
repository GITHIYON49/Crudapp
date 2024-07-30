import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "../../components";
import { String } from "../../data";
import { ListContex } from "../../App";

const Edituser = () => {
  const navigate = useNavigate();

  const { name, age, setAge, setName, personData } = useContext(ListContex);

  const [id, setId] = useState("");

  let index = personData
    ?.map(function (e) {
      return e.id;
    })
    .indexOf(+id);

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || age === "") {
      return;
    }

    let a = personData[index];

    a.name = name;
    a.age = age;

    navigate("/");
  }

  useEffect(() => {
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("Id"));
    setName(localStorage.getItem("Name"));
  }, [setAge, setName]);

  const { editBtn, editPageName, placeholderName, placeholderAge } = String;
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-gray-400 text-xl capitalize font-bold">
          {editPageName}
        </h2>
        <div className="w-3/5 flex flex-col gap-4 border-2 p-4">
          <Input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder={`${placeholderName}`}
          />
          <Input
            type="text"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            placeholder={`${placeholderAge}`}
          />
          <Button
            name={`${editBtn}`}
            className={`w-full bg-yellow-400  hover:bg-yellow-300`}
            onClick={(e) => handleSubmit(e)}
          />
        </div>
      </div>
    </>
  );
};

export default Edituser;
