import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Read() {
  const navigateEdit = useNavigate();
  const [readData, setReadData] = useState([]);
  const getData = async () => {
    const resp = await axios.get(
      "https://6648b28c4032b1331bec258b.mockapi.io/crud"
    );
    setReadData(resp.data);
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(
        `https://6648b28c4032b1331bec258b.mockapi.io/crud/${id}`
      );
      getData();
    } catch (err) {}
  };

  const setlocalStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="h-screen bg-green-300 flex justify-center items-center ">
        <div className="p-2 bg-white rounded-xl shadow-xl flex flex-col gap-2">
          <div className="resize-auto overflow-scroll h-96">
            <table className="border-2 text-center table-fixed border-collapse">
              <thead>
                <tr className="heading">
                  <th>ID</th>
                  <th>NAME</th>
                  <th>AGE</th>
                  <th>EMAIL</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {readData.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.age}</td>
                      <td>{val.email}</td>
                      <td
                        className="edit"
                        onClick={() => {
                          setlocalStorage(val.id, val.name, val.age, val.email);
                          navigateEdit("/edit");
                        }}
                      >
                        edit
                      </td>
                      <td
                        className="delete"
                        onClick={() => {
                          if (confirm("do you really want to delete data")) {
                            deleteData(val.id);
                          }
                        }}
                      >
                        delete
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Link
            to="/create"
            className="bg-green-500 p-2 border-transparent rounded-b-lg text-white hover:bg-blue-500 border-2 active:bg-blue-300 hover:border-black text-center"
          >
            Create Data
          </Link>
        </div>
      </div>
    </>
  );
}

export default Read;
