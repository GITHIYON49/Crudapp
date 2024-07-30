import { useContext } from "react";
import { Link } from "react-router-dom";
import { Trash, Pencil } from "lucide-react";
import { String } from "../../data";
import Button from "../Button/Button";
import { ListContex } from "../../App";

const Table = ({ handleDelete }) => {
  const { headerOne, headertwo, headerThree, headerFour, editBtn, deleteBtn } =
    String;

  const { personData } = useContext(ListContex);

  function setId(id, name, age) {
    localStorage.setItem("Id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
  }

  return (
    <>
      <table className="w-3/5">
        <thead className="text-xl">
          <tr>
            <th className="border-2 border-gray-400">{headerOne}</th>
            <th className="border-2 border-gray-400">{headertwo}</th>
            <th className="border-2 border-gray-400">{headerThree}</th>
            <th className="border-2 border-gray-400">{headerFour}</th>
          </tr>
        </thead>
        <tbody>
          {personData?.map((users, index) => {
            return (
              <tr key={index} className="text-center">
                <td className="border-2 border-gray-400 capitalize p-2">
                  {users.name}
                </td>
                <td className="border-2 border-gray-400 p-2">{users.age}</td>
                <td className="border-2 border-gray-400 capitalize p-2">
                  <Link to={"/edituser"}>
                    <Button
                      name={`${editBtn}`}
                      icons={<Pencil />}
                      onClick={(e) => {
                        setId(users.id, users.name, users.age);
                      }}
                      className="w-4/5 bg-blue-500 text-white flex items-center justify-center gap-2"
                    />
                  </Link>
                </td>
                <td className="border-2 border-gray-400 capitalize p-2">
                  <Button
                    name={`${deleteBtn}`}
                    icons={<Trash />}
                    onClick={() => handleDelete(index)}
                    className="w-4/5 bg-red-500 text-white flex items-center justify-center gap-2"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
