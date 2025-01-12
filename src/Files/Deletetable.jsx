import React, { useState,useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

const Deletetable = ({ setDeletes, id }) => {
  const [Loading, setLoading] = useState(false);

  
  const Deletedata = () => {
    try {
setLoading(true)
      axios
      .delete(`http://localhost:3000/person/${id}`)
      .then((res) => {
        // setDeletes();
        // setLoading(false)
      })
      .catch((err) => {
        console.log("data", err);
      });
    } catch (error) {
      console.log("datass", error);
    }
  };

  useEffect(() => {
    if (Loading == true) {
      const timeoutId = setTimeout(() => {
        toast.error("Data is deleted");
        setDeletes()
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [Loading]);
  
  return (
    <div className="flex flex-col gap-6  mx-3  items-center justify-center bg-opacity-45">
      <ToastContainer />
<div className=" h-full w-full flex flex-col justify-center items-center  rounded-lg">

      <div>
        <h1>Are you Sure? You Want to delete this</h1>
      </div>

      <div className="flex gap-8">
        <button
          onClick={Deletedata}
          className="bg-green-700 w-fit h-fit px-4 py-2 rounded-lg"
        >

          {Loading ? <FaSpinner className="animate-spin" /> : "Yes"}
        </button>
        <button
          className="bg-red-600 w-fit h-fit px-4 py-2 rounded-lg"
          onClick={() => {
            setDeletes(null);
          }}
        >
          No
        </button>
      </div>
</div>
    </div>
  );
};

export default Deletetable;
