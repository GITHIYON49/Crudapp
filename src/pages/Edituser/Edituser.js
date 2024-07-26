import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "../../components";
import { String } from "../../data";

const Edituser = ({ personData }) => {
  const navigate = useNavigate();

  const [name, setName] = useState(" ");
  const [age, setAge] = useState(" ");
  const [id, setId] = useState(" ");

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("Id"));
  }, []);

  let index = personData
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

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
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-gray-400 text-xl capitalize font-bold">
          {String.editPageName}
        </h2>
        <div className="w-3/5 flex flex-col gap-4 border-2 p-4">
          <Input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder={`${String.placeholderName}`}
          />
          <Input
            type="text"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            placeholder={`${String.placeholderAge}`}
          />
          <Button
            name={`${String.editBtn}`}
            className={`w-full bg-yellow-400  hover:bg-yellow-300`}
            onClick={(e) => handleSubmit(e)}
          />
        </div>
      </div>
    </>
  );
};

export default Edituser;
