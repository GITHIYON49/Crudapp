import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Trash, Pencil } from "lucide-react";
import { Button } from "../../components";
import { String } from "../../data";

const Home = ({ personData, handleDelete }) => {
  const navigation = useNavigate();

  const {
    headerOne,
    headertwo,
    headerThree,
    headerFour,
    editBtn,
    deleteBtn,
    createBtn,
  } = String;

  function handleClick() {
    navigation("/adduser");
  }
  function setId(id, name, age) {
    localStorage.setItem("Id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
  }
  return (
    <>
      <section className="h-[80vh] flex flex-col gap-3 items-center justify-center">
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
            {personData.map((users, index) => {
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
        <div className="w-3/5">
          <Button
            className={`w-full bg-yellow-400 hover:bg-yellow-300`}
            name={`${createBtn}`}
            onClick={handleClick}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
