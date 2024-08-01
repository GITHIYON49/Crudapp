import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "../../components";
import { String } from "../../data";
import { ListContex } from "../../App";

const Home = () => {
  const { createBtn } = String;
  const { personData, setPersonData } = useContext(ListContex);
  const navigate = useNavigate();

  function handleDelete(i) {
    const newData = [...personData];
    newData.splice(i, 1);
    setPersonData(newData);
  }

  function handeleNavigate() {
    navigate("/adduser");
  }

  return (
    <>
      <section className="h-[80vh] flex flex-col gap-3 items-center justify-center">
        <Table handleDelete={handleDelete} />
        <div className="w-3/5">
          <Button
            className={`w-full bg-yellow-400 hover:bg-yellow-300`}
            name={`${createBtn}`}
            onClick={() => handeleNavigate()}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
