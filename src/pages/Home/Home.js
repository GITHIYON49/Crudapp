import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "../../components";
import { String } from "../../data";
import { ListContex } from "../../App";

const Home = () => {
  const { createBtn } = String;
  const { personData, setPersonData } = useContext(ListContex);

  function handleDelete(i) {
    const newData = [...personData];
    newData.splice(i, 1);
    setPersonData(newData);
  }

  return (
    <>
      <section className="h-[80vh] flex flex-col gap-3 items-center justify-center">
        <Table handleDelete={handleDelete} />
        <div className="w-3/5">
          <Link to={"/adduser"}>
            <Button
              className={`w-full bg-yellow-400 hover:bg-yellow-300`}
              name={`${createBtn}`}
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
