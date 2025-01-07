import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Second = () => {
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
    <div className='bg-pink-100 w-full h-lvh flex items-center justify-center'>
    <div className=' w-11/12 '>
        <table className=' w-full  '>
            <thead className='border-2 border-black bg-gray-200'>
                <tr className=' font-bold text-lg '>
                    <th className='border border-black'>Firstname</th>
                    <th className='border border-black'>Middlename</th>
                    <th className='border border-black'>Lastname</th>
                    <th className='border border-black'>Collegename</th>
                    <th className='border border-black'>Email</th>
                    <th className='border border-black'>Phone</th>
                    <th className='border border-black'>Subject</th>
                </tr>
            </thead>
            <tbody>
                {person.map((table,index)=>(
                    
                    <tr className='bg-green-100' key={index}>
                        <td className='px-4  border border-black '>{table.firstName}</td>
                        <td className='px-4 border border-black'>{table.middleName}</td>
                        <td className='px-4 border border-black'>{table.lastName}</td>
                        <td className='px-4 border border-black'>{table.collegeName}</td>
                        <td className='px-4 border border-black'>{table.email}</td>
                        <td className='px-4 border border-black'>{table.phone}</td>
                        <td className='px-4 border border-black'>{table.subject}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    </div>
  );
};

export default Second;

