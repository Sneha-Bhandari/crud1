import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "formik";
import Formho from "./Formho";
import Deletetable from "./Deletetable";


const Getmethod = () => {
  const [edit, setEdit] = useState(false);
  const [deletes, setDeletes] = useState(false);

  const [person, setPerson] = useState([]);

  // axios , fetch (api hit garne duita tarika)

  const getPerson = () => {
    axios
      .get("http://localhost:3000/person")
      .then((result) => {
        console.log(result.data);

        setPerson([...result.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div className=" w-full h-lvh flex items-center justify-center">
      <div>
        {edit && (
          <div className=" ">
            <div className="h-screen bg-green-400 w-fit">
              <Formho/>
             </div>
           </div>
        )}
      </div>
      <div>
        {deletes && (
          <div className="fixed left-0 top-0 z-10 bg-black h-screen w-screen flex justify-center items-center bg-opacity-45">
            <div className="bg-white w-3/12 h-1/6 shadow-2xl rounded-lg">
            <Deletetable setDeletes={setDeletes} />

            </div>
          </div>
        )}
      </div>

      <div className=" w-11/12 relative ">
        <table className=" w-full  ">
          <thead className="border-2 border-black bg-gray-200">
            <tr className=" font-bold text-lg ">
              <th className="border border-black">Firstname</th>
              <th className="border border-black">Middlename</th>
              <th className="border border-black">Lastname</th>
              <th className="border border-black">Collegename</th>
              <th className="border border-black">Email</th>
              <th className="border border-black">Phone</th>
              <th className="border border-black">Subject</th>
              <th className="border border-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {person.map((table, index) => (
              <tr className="bg-green-100" key={index}>
                <td className="px-4  border border-black ">
                  {table.firstName}
                </td>
                <td className="px-4 border border-black">{table.middleName}</td>
                <td className="px-4 border border-black">{table.lastName}</td>
                <td className="px-4 border border-black">
                  {table.collegeName}
                </td>
                <td className="px-4 border border-black">{table.email}</td>
                <td className="px-4 border border-black">{table.phone}</td>
                <td className="px-4 border border-black">{table.subject}</td>
                <td className="px-4 border border-black">
                  {table.Action}
                  <td className="gap-6 flex">
                    <button
                      type="submit"
                      className="border border-black p-2 "
                      onClick={() => setEdit(true)}
                    >
                      Edit
                    </button>
                    <button
                      type="submit"
                      className="border border-black "
                      onClick={() => setDeletes(true)}
                    >
                      Delete
                    </button>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Getmethod;
