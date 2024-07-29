import { Input, Button } from "../../components";
import { String } from "../../data";

const Adduser = ({ handleCreate, setAge, setName }) => {
  const { addPageName, placeholderName, placeholderAge, addBtn } = String;
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-gray-400 text-xl capitalize font-bold">
          {addPageName}
        </h2>
        <div className="w-3/5 flex flex-col gap-4 border-2 p-4">
          <Input
            type="text"
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
