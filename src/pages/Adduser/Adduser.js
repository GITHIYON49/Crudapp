import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ListContex } from "../../App";
import { Input, Button } from "../../components";
import { String } from "../../data";

const Adduser = () => {
  const { addPageName, placeholderName, placeholderAge, addBtn } = String;
  const { personData, setAge, setName, setPersonData, name, age } =
    useContext(ListContex);

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
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-gray-400 text-xl capitalize font-bold">
          {addPageName}
        </h2>
        <div className="w-3/5 flex flex-col gap-4 border-2 p-4">
          <Input
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder={`${placeholderName}`}
          />
          <Input
            type="number"
            onChange={(e) => {
              setAge(e.target.value);
            }}
            placeholder={`${placeholderAge}`}
          />
          <Button
            name={`${addBtn}`}
            className={`w-full bg-yellow-400  hover:bg-yellow-300`}
            onClick={handleCreate}
          />
        </div>
      </div>
    </>
  );
};

export default Adduser;
